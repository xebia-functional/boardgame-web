import { Link } from 'wouter';
import error404 from '/error404.png';

export default function NotFound() {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-white flex-col">
            <img
                src={error404}
                alt="Página no encontrada"
                className="max-w-[50vw] max-h-[50vh] w-auto h-auto"
            />
            <h1 className="text-2xl font-semibold mt-6">Result Not Found</h1>
            <p className="text-lg text-gray-600 mt-2">
                Whoops... The information is not available at this moment.
            </p>
            <Link
                to="/"
                className="mt-6 px-6 py-2 bg-orange-400 text-black rounded hover:bg-orange-300 transition"
            >
                Volver al Inicio
            </Link>
        </div>
    );
}
