interface ChatButtonProps {
    onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => (
    <button
        onClick={onClick}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white text-2xl flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors z-50"
    >
        💬
    </button>
);

export default ChatButton;
