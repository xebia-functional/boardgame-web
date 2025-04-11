import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'wouter';

export default function Search() {
    const [results, setResults] = useState<GameBGG[]>([]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    const getSearchResults = async (query: string) => {
        const response = await fetch(`http://localhost:8081/search?query=${query}`);
        const data = await response.json();

        setResults(data.items);
    };

    useEffect(() => {
        if (query) {
            getSearchResults(query);
        }
    }, [query]);

    return (
        <div className="bg-white-secondary w-full h-screen">
            <div className="p-4">
                <h2 className="bg-white w-full text-center p-4 rounded-md font-semibold shadow-md">
                    "{query}" results...
                </h2>
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
                                <Link
                                    href={'/games/' + game.id}
                                    className="bg-secondary text-primary font-bold px-3 py-1 rounded-md text-center cursor-pointer hover:scale-110 transition-transform"
                                >
                                    Show
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No results found for "{query}"</p>
                    )}
                </div>
            </div>
        </div>
    );
}
