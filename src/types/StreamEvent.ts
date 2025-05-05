export interface StreamEvent {
    type: 'text_generated' | string;
    text: string;
    event?: string;
}
