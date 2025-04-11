import { useSearchParams } from 'wouter';

export default function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');

    return <div>Search: {query}</div>;
}
