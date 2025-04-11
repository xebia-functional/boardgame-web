import { useState } from 'react';
import { useLocation } from 'wouter';
import { IconSearch } from '@tabler/icons-react';
import { FormEvent } from 'react';

export default function SearchInput() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [, navigate] = useLocation();

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm('');
        }
    };

    return (
        <form onSubmit={handleSearch} className="relative">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black">
                <IconSearch size={16} stroke={2} />
            </span>
            <input
                className="bg-white text-black pl-8 pr-2 py-1 rounded-sm w-full outline-none focus:ring-0 focus:border-transparent"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </form>
    );
}
