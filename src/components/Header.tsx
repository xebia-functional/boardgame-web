import { useState } from 'react';
import { Link } from 'wouter';
import { IconMenu, IconX } from '@tabler/icons-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between p-4 bg-primary text-white relative">
            <Link href="/">
                <h1 className="text-2xl font-bold">BGG SYSTEM</h1>
            </Link>

            <button
                className="md:hidden z-20 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <IconX stroke={2} /> : <IconMenu stroke={2} />}
            </button>

            <nav
                className={`
                ${isMenuOpen ? 'block' : 'hidden'}
                absolute top-full left-0 w-full bg-primary p-4
                md:static md:block md:w-auto md:p-0
            `}
            >
                <ul className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                    <li>
                        <Link href="/players" className="text-white hover:text-gray-300">
                            Players
                        </Link>
                    </li>
                    <li>
                        <Link href="/plays" className="text-white hover:text-gray-300">
                            Plays
                        </Link>
                    </li>
                    <li>
                        <Link href="/games" className="text-white hover:text-gray-300">
                            Games
                        </Link>
                    </li>
                    <li className="block md:hidden">
                        <input
                            className="bg-white text-black p-1 rounded-sm w-full"
                            type="text"
                            placeholder="Search..."
                        />
                    </li>
                </ul>
            </nav>

            <div className="hidden md:block">
                <input
                    className="bg-white text-black p-1 rounded-sm"
                    type="text"
                    placeholder="Search..."
                />
            </div>
        </header>
    );
}
