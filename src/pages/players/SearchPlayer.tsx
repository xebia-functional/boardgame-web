import { useState } from 'react';
import axios from 'axios';

export default function SearchPlayer() {
    const [nickname, setNickname] = useState('');
    const [players, setPlayers] = useState<PlayerDTO[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.get<PlayerDTO[]>(
                `http://localhost:8080/player/${nickname}`
            );
            setPlayers(response.data);
            setError(null);
        } catch (err) {
            console.error(err);
            setError('Player not found');
            setPlayers(null);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 mt-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Search Player</h2>
            <form onSubmit={handleSearch} className="space-y-4">
                <input
                    type="text"
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                    placeholder="Enter nickname"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Search
                </button>
            </form>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
            {players && players.length > 0 && (
                <div className="mt-4">
                    <h3 className="font-semibold">Results:</h3>
                    <ul className="list-disc pl-5">
                        {players.map(player => (
                            <li key={player.id}>
                                <strong>{player.nickname}</strong> - {player.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
