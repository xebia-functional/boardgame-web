import { IconSearch } from '@tabler/icons-react';

export default function SearchInput() {
    return (
        <div className="relative">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-black">
                <IconSearch size={16} stroke={2} />
            </span>
            <input
                className="bg-white text-black pl-8 pr-2 py-1 rounded-sm w-full outline-none focus:outline-none focus:ring-0 focus:border-transparent"
                type="text"
                placeholder="Search..."
            />
        </div>
    );
}
