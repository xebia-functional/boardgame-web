import { Link } from 'wouter';

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-primary text-white">
            <Link href="/">
                <h1 className="text-2xl font-bold">BGG SYSTEM</h1>
            </Link>
            <nav>
                <ul className="flex space-x-4">
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
                </ul>
            </nav>
            <div>
                <input
                    className="bg-white text-black p-1 rounded-sm"
                    type="text"
                    placeholder="Search..."
                />
            </div>
        </header>
    );
}
