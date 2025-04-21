import { useState } from 'react';
import HotGame from './HotGame';

export default function HotGames() {
    const [games, setGames] = useState<Game[]>([
        {
            name: 'Juego 1',
            description:
                'Descripción breve del juego 1. Este es un juego muy popular entre los usuarios.'
        },
        {
            name: 'Juego 2',
            description: 'Descripción breve del juego 2. Es uno de los más jugados este año.'
        },
        {
            name: 'Juego 3',
            description: 'Descripción breve del juego 3. Tiene una jugabilidad muy entretenida.'
        },
        {
            name: 'Juego 4',
            description: 'Descripción breve del juego 4. Es uno de los más jugados este año.'
        },
        {
            name: 'Juego 5',
            description: 'Descripción breve del juego 5. Tiene una jugabilidad muy entretenida.'
        }
    ]);

    return (
        <section className="w-full p-4">
            <h3 className="text-3xl font-semibold text-center mb-8">
                Nuestros juegos más famosos 🔥
            </h3>

            <div className="flex flex-wrap justify-center gap-6 w-full">
                {games.map(game => (
                    <HotGame key={game.name} game={game} />
                ))}
            </div>
        </section>
    );
}
