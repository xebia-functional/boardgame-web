import { StreamEvent } from '../types/StreamEvent';
import { snakeToCamel } from '../lib/utils';

export type AskAiArgs = {
    prompt: string;
    chatId?: string;
    projectId: string;
};

let currentEvent: string | null = null;

export function parseSSELine(line: string) {
    if (!line) return;

    if (line.startsWith('event: ')) {
        currentEvent = line.replace('event: ', '').trim();
        return;
    } else if (line.startsWith('data: ')) {
        const dataLine = line.replace('data: ', '').trim();

        try {
            const parsedData = JSON.parse(dataLine);
            const data: StreamEvent = { ...parsedData, event: currentEvent };
            currentEvent = null;
            return snakeToCamel<StreamEvent>(data);
        } catch (error) {
            const err = new Error(`Invalid JSON: ${dataLine}`);
            (err as any).cause = error;
            return err;
        }
    }
}

export async function* streamSSE(response: Response) {
    if (!response.body) throw new Error('No response body');
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let chunk = '';

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        chunk += decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        if (!chunk.endsWith('\n')) {
            chunk = lines.pop() ?? '';
        } else {
            chunk = '';
        }

        for (const line of lines) {
            const event: StreamEvent | Error | undefined = parseSSELine(line);
            if (event instanceof Error) {
                console.error('Error parsing SSE line:', event);
            } else if (event) {
                yield event;
            }
        }
    }
}

const askAi = async ({ prompt, chatId, projectId }: AskAiArgs) => {
    try {
        const response = await fetch('http://localhost:8080/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt, chatId, projectId })
        });

        if (!response.ok || !response.body) {
            throw new Error(`status: ${response.status}, text: ${response.statusText}`);
        }

        return streamSSE(response);
    } catch (error) {
        console.error('error: ', error);
    }
};

export default askAi;
