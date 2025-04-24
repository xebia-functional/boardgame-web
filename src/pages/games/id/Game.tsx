import { useParams } from 'wouter';

export default function Game() {
    const params = useParams<{ id: string }>();
    const { id } = params;
    return <div>Game {id}</div>;
}
