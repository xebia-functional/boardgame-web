import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { IconMenu, IconX } from '@tabler/icons-react';
import InputSearch from './SearchInput';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [location] = useLocation();

    const navLinks = [
        { href: '/players', label: 'Players' },
        { href: '/plays', label: 'Plays' },
        { href: '/games', label: 'Games' }
    ];

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
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`text-white hover:text-gray-300 ${location === href ? 'font-bold' : ''}`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li className="block md:hidden">
                        <InputSearch />
                    </li>
                </ul>
            </nav>

            <div className="hidden md:block">
                <InputSearch />
            </div>
        </header>
    );
}
