import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'wouter';

export default function Search() {
    const [results, setResults] = useState<GameBGG[]>([
        {
            id: 1,
            name: 'Game 1',
            yearPublished: 2022
        },
        {
            id: 2,
            name: 'Game 2',
            yearPublished: 2023
        },
        {
            id: 3,
            name: 'Game 3',
            yearPublished: 2024
        }
    ]);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        // Call to the API to fetch the search results
    }, [query]);

    return (
        <div className="bg-white-secondary w-full h-screen">
            <div className="p-4">
                <h2 className="bg-white w-full text-center p-4 rounded-md font-semibold shadow-md">
                    "{query}" results...
                </h2>
                <div className="flex flex-col justify-center gap-3 w-full mt-4">
                    {results.length > 0 ? (
                        results.map(game => (
                            <div
                                key={game.id}
                                className="flex justify-between items-center bg-white p-4 rounded-md shadow-md"
                            >
                                <h3 className="text-xl font-semibold">
                                    {game.name}{' '}
                                    <span className="font-normal">({game.yearPublished})</span>
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
