import { useState, useEffect } from 'react';
import axios from 'axios';
import CreatePlayModal from './CreatePlayModal';

export default function PlaysTable() {
    const [plays, setPlays] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);

    // 1. Obtener todas las partidas al cargar el componente
    useEffect(() => {
        const fetchPlays = async () => {
            try {
                const response = await axios.get('http://localhost:8080/plays/');
                setPlays(response.data);
            } catch (error) {
                console.error('Error fetching plays:', error);
            }
        };

        fetchPlays();
    }, []);

    const handlePlayCreated = (newPlay: any) => {
        // 2. Actualizar el estado de las partidas con la nueva partida
        setPlays(prevPlays => [...prevPlays, newPlay]);
        setShowModal(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6 flex flex-col min-h-screen">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Partidas</h2>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Crear nueva partida
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-auto border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Ubicación</th>
                            <th className="p-2 border">Jugadores</th>
                            <th className="p-2 border">Juego</th>
                            <th className="p-2 border">Ganador</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plays.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="p-2 text-center text-gray-500">
                                    No hay partidas registradas
                                </td>
                            </tr>
                        ) : (
                            plays.map(play => (
                                <tr key={play.id}>
                                    <td className="p-2 border">{play.location}</td>
                                    <td className="p-2 border">
                                        {play.players
                                            .map((player: any) => player.nickname)
                                            .join(', ')}
                                    </td>
                                    <td className="p-2 border">{play.game.title}</td>
                                    <td className="p-2 border">
                                        {play.winner ? play.winner.nickname : 'No asignado'}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Mostrar el modal para crear una nueva partida */}
            {showModal && (
                <CreatePlayModal
                    onClose={() => setShowModal(false)}
                    onPlayCreated={handlePlayCreated}
                />
            )}
        </div>
    );
}
