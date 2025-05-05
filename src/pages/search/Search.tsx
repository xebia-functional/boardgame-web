import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'wouter';
import axios from 'axios';

export default function Search() {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState<GameBGG[]>([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const getSearchResults = async (query: string) => {
        const response = await fetch(`http://localhost:8081/search?query=${query}`);
        const data = await response.json();

        setResults(data?.items ? data.items : []);
        setLoading(false);
    };

    const saveGames = async (game: any) => {
        try {
            const response = await axios.post(`http://localhost:8080/games/${game.id}`);
            console.log('Juego guardado desde BGG:', response.data);
            alert(`El juego "${game.name.value}" ha sido guardado correctamente.`);

            localStorage.setItem('newGameAdded', Date.now().toString());
        } catch (error) {
            console.error('Error al guardar el juego desde BGG:', error);
        }
    };

    useEffect(() => {
        if (query) {
            getSearchResults(query);
        }
    }, [query]);

    return (
        <div className="bg-white-secondary w-full min-h-screen">
            <div className="flex flex-col justify-center gap-3 w-full mt-4 p-2">
                <h2 className="bg-white w-full text-center p-4 rounded-md font-semibold shadow-md">
                    "{query}" results...
                </h2>
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <h2 className="text-3xl font-semibold">Loading...</h2>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center gap-3 w-full mt-4">
                        {results.length > 0 ? (
                            results.map((game, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center bg-white p-4 rounded-md shadow-md"
                                >
                                    <h3 className="text-xl font-semibold">
                                        {game.name.value}{' '}
                                        <span className="font-normal">
                                            ({game.yearpublished?.value ?? 'No year'})
                                        </span>
                                    </h3>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => saveGames(game)}
                                            className="bg-blue-500 text-white font-bold px-3 py-1 rounded-md text-center cursor-pointer hover:bg-blue-600 transition-colors"
                                        >
                                            Add
                                        </button>
                                        <Link
                                            href={`/games/${game.id}`}
                                            className="bg-gray-200 text-black font-bold px-3 py-1 rounded-md text-center cursor-pointer hover:bg-gray-300 transition-colors"
                                        >
                                            Show
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No results found for "{query}"</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
