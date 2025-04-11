export default function HotGame({ game }: { game: Game }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-md">
            <span className="text-xl font-bold mb-4">{game.name}</span>
            <p className="text-gray-700">{game.description}</p>
        </div>
    );
}
