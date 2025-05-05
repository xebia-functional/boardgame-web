import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CreatePlayModalProps {
    onClose: () => void;
    onPlayCreated: (newPlay: any) => void;
}

const CreatePlayModal: React.FC<CreatePlayModalProps> = ({ onClose, onPlayCreated }) => {
    const [location, setLocation] = useState('');
    const [players, setPlayers] = useState<Player[]>([]);
    const [allPlayers, setAllPlayers] = useState<Player[]>([]);
    const [playerSearch, setPlayerSearch] = useState('');

    const [game, setGame] = useState<Game | null>(null);
    const [allGames, setAllGames] = useState<Game[]>([]);
    const [gameSearch, setGameSearch] = useState('');

    const [winner, setWinner] = useState<number | null>(null);

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/players/');
                setAllPlayers(response.data);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };

        const fetchGames = async () => {
            try {
                const response = await axios.get('http://localhost:8080/games/');
                setAllGames(response.data);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchPlayers();
        fetchGames();
    }, []);

    const handleAddPlayer = (player: Player) => {
        if (!players.some(p => p.id === player.id)) {
            setPlayers(prev => [...prev, player]);
        }
    };

    const handleCreatePlay = async () => {
        if (!location || !game || players.length === 0 || winner === null) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const isWinnerValid = players.some(p => p.id === winner);
        if (!isWinnerValid) {
            alert('El ganador debe estar entre los jugadores seleccionados.');
            return;
        }

        const playData = {
            location,
            players: players.map(p => p.id),
            game: game.id,
            winner: winner
        };

        try {
            const response = await axios.post('http://localhost:8080/plays/', playData);
            console.log('Partida creada con éxito:', response.data);

            onPlayCreated(response.data);
            onClose();
        } catch (error) {
            console.error('Error al crear la partida:', error);
            alert('Hubo un error al crear la partida. Intenta de nuevo.');
        }
    };

    const filteredPlayers = allPlayers.filter(p =>
        `${p.nickname} ${p.nickname}`.toLowerCase().includes(playerSearch.toLowerCase())
    );

    const filteredGames = allGames.filter(
        g => g.title && g.title.toLowerCase().includes(gameSearch.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-[500px] max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Crear nueva partida</h2>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Ubicación</label>
                    <input
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Añadir jugador</label>
                    <input
                        type="text"
                        value={playerSearch}
                        onChange={e => setPlayerSearch(e.target.value)}
                        placeholder="Buscar por nickname"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    {playerSearch && (
                        <ul className="border border-gray-300 rounded max-h-40 overflow-y-auto">
                            {filteredPlayers.length > 0 ? (
                                filteredPlayers.map(player => (
                                    <li
                                        key={player.id}
                                        onClick={() => {
                                            handleAddPlayer(player);
                                            setPlayerSearch('');
                                        }}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {player.name} - {player.nickname}
                                    </li>
                                ))
                            ) : (
                                <li className="p-2 text-gray-500">No hay coincidencias</li>
                            )}
                        </ul>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">
                        Jugadores seleccionados
                    </label>
                    <ul className="flex flex-wrap gap-2">
                        {players.map(player => (
                            <li
                                key={player.id}
                                className="bg-gray-200 px-2 py-1 rounded flex items-center gap-2"
                            >
                                {player.nickname}
                                <button
                                    onClick={() =>
                                        setPlayers(prev => prev.filter(p => p.id !== player.id))
                                    }
                                    className="text-red-600 hover:text-red-800 font-bold cursor-pointer"
                                    title="Eliminar jugador"
                                >
                                    ×
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Seleccionar juego</label>
                    <input
                        type="text"
                        value={gameSearch}
                        onChange={e => setGameSearch(e.target.value)}
                        placeholder="Buscar juego"
                        className="w-full p-2 border border-gray-300 rounded mb-2"
                    />
                    <select
                        onChange={e => {
                            const selectedGame = allGames.find(
                                g => g.id === parseInt(e.target.value)
                            );
                            if (selectedGame) {
                                setGame(selectedGame);
                            }
                        }}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Selecciona un juego</option>
                        {filteredGames.map(game => (
                            <option key={game.id} value={game.id}>
                                {game.title}
                            </option>
                        ))}
                    </select>
                    {game && (
                        <div className="mt-1 text-sm text-gray-600">
                            Juego seleccionado: {game.title}
                        </div>
                    )}
                </div>

                {players.length > 0 && (
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1">Ganador</label>
                        <select
                            value={winner?.toString() || ''}
                            onChange={e => setWinner(Number(e.target.value))}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">Selecciona un ganador</option>
                            {players.map(p => (
                                <option key={p.id} value={p.id}>
                                    {p.name} - {p.nickname}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <div className="flex justify-between mt-6">
                    <button
                        onClick={onClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleCreatePlay}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Crear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreatePlayModal;
