import { useState, useEffect, useRef } from 'react';
import askAi from '../../api/askAi';
import { StreamEvent } from '../../types/StreamEvent';

interface ChatWindowProps {
    onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { text: input, from: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        try {
            const stream = await askAi({
                prompt: input,
                projectId: 'mi-proyecto'
            });

            if (stream) {
                let aiText = '';
                for await (const event of stream) {
                    if ((event as StreamEvent).type === 'text_generated') {
                        aiText += (event as StreamEvent).text;
                        setMessages(prev => {
                            const updated = [...prev];
                            if (updated[updated.length - 1]?.from === 'ai') {
                                updated[updated.length - 1].text = aiText;
                            } else {
                                updated.push({ text: aiText, from: 'ai' });
                            }
                            return updated;
                        });
                    }
                }
            }
        } catch (err) {
            console.error('Error al enviar mensaje:', err);
        }
    };

    return (
        <div className="fixed bottom-24 right-6 w-[90%] max-w-md h-[50vh] md:w-80 bg-white border border-gray-300 rounded-lg shadow-xl flex flex-col z-50">
            <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white rounded-t-lg">
                <span>Asistente Virtual</span>
                <button onClick={onClose} className="text-white hover:text-gray-200">
                    ✖
                </button>
            </div>

            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`p-2 rounded-md max-w-[80%] break-words ${
                            msg.from === 'user'
                                ? 'bg-blue-100 self-end text-right ml-auto'
                                : 'bg-gray-200 self-start mr-auto'
                        }`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            <form onSubmit={sendMessage} className="flex border-t border-gray-300">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 p-2 outline-none text-sm"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 text-sm hover:bg-blue-700 transition"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default ChatWindow;
