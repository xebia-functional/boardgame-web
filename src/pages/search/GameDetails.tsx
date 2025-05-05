import { useEffect, useState } from 'react';
import { useRoute } from 'wouter';

export default function GameDetails() {
    const [gameDetails, setGameDetails] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [params] = useRoute('/games/:gameId');

    const gameId =
        params && typeof params !== 'boolean' ? (params as { gameId: string }).gameId : null;

    const fetchGameDetails = async () => {
        if (!gameId) return;
        setLoading(true);
        const response = await fetch(`http://localhost:8081/games/${gameId}`);
        const data = await response.json();
        setGameDetails(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchGameDetails();
    }, [gameId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-3xl font-semibold">Loading...</h2>
            </div>
        );
    }

    return (
        <div className="game-details-container bg-white p-4 min-h-screen">
            {gameDetails ? (
                <div className="game-details">
                    <h2 className="text-3xl font-semibold">{gameDetails.title}</h2>
                    <p>
                        <strong>Authors:</strong> {gameDetails.authors.join(', ')}
                    </p>
                    <p>
                        <strong>Artists:</strong> {gameDetails.artists.join(', ')}
                    </p>
                    <p>
                        <strong>Year:</strong> {gameDetails.year}
                    </p>
                    <p>
                        <strong>Players:</strong> {gameDetails.minPlayers} -{' '}
                        {gameDetails.maxPlayers}
                    </p>
                    <p>
                        <strong>Age:</strong> {gameDetails.age}
                    </p>
                    <p>
                        <strong>Playtime:</strong> {gameDetails.minPlayTime} -{' '}
                        {gameDetails.maxPlayTime} minutes
                    </p>
                    <p>
                        <strong>Type:</strong> {gameDetails.type}
                    </p>
                    <img
                        src={gameDetails.urlImage}
                        alt={gameDetails.title}
                        className="game-image"
                    />
                </div>
            ) : (
                <p>No details found for this game.</p>
            )}
        </div>
    );
}
