import { useEffect, useState } from 'react';
import axios from 'axios';
import CreatePlayerModal from './CreatePlayerModal';

interface PlayerDTO {
    id: number;
    name: string;
    nickname: string;
}

export default function PlayersTable() {
    const [players, setPlayers] = useState<PlayerDTO[]>([]);
    const [showModal, setShowModal] = useState(false);

    const fetchPlayers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/players/');
            console.log('Jugadores actualizados:', response.data);
            setPlayers(response.data);
        } catch (error) {
            console.error('Error fetching players:', error);
        }
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    console.log('Renderizando tabla de jugadores:', players);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6 flex flex-col min-h-screen">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Players</h2>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add New Player
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-auto border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Name</th>
                            <th className="p-2 border">Nickname</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player => (
                            <tr key={player.id}>
                                <td className="p-2 border">{player.name}</td>
                                <td className="p-2 border">{player.nickname}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <CreatePlayerModal
                    onClose={() => setShowModal(false)}
                    onPlayerCreated={async () => await fetchPlayers()}
                />
            )}
        </div>
    );
}
