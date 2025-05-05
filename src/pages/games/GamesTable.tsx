import { useEffect, useState } from 'react';
import axios from 'axios';

interface GameDTO {
    id: number;
    bggId: number;
    title: string;
    age: number;
}

export default function GamesTable() {
    const [games, setGames] = useState<GameDTO[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Filtrado de juegos basado en la búsqueda
    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Obtener los juegos desde el backend
    const fetchGames = async () => {
        try {
            const response = await axios.get('http://localhost:8080/games/');
            console.log('Juegos recuperados:', response.data);
            setGames(response.data);
        } catch (error) {
            console.error('Error fetching games:', error);
        }
    };

    useEffect(() => {
        fetchGames();
    }, []);

    console.log('Renderizando tabla de juegos:', games);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow mt-6 flex flex-col min-h-screen">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Games</h2>
                <input
                    type="text"
                    placeholder="Buscar juegos..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="border border-gray-300 p-2 rounded"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full table-auto border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">ID</th>
                            <th className="p-2 border">ID BGG</th>
                            <th className="p-2 border">Title</th>
                            <th className="p-2 border">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredGames.map(game => (
                            <tr key={game.id}>
                                <td className="p-2 border">{game.id}</td>
                                <td className="p-2 border">{game.bggId}</td>
                                <td className="p-2 border">{game.title}</td>
                                <td className="p-2 border">{game.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
