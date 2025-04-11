export default function HotGames() {
    return (
        <section className="w-full p-4">
            <h3 className="text-3xl font-semibold text-center mb-8">
                Nuestros juegos más famosos 🔥
            </h3>

            <div className="flex flex-wrap justify-center gap-6 w-full">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-md">
                    <span className="text-xl font-bold mb-4">Juego 1</span>
                    <p className="text-gray-700">
                        Descripción breve del juego 1. Este es un juego muy popular entre los
                        usuarios.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-md">
                    <span className="text-xl font-bold mb-4">Juego 2</span>
                    <p className="text-gray-700">
                        Descripción breve del juego 2. Es uno de los más jugados este año.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-md">
                    <span className="text-xl font-bold mb-4">Juego 3</span>
                    <p className="text-gray-700">
                        Descripción breve del juego 3. Tiene una jugabilidad muy entretenida.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-md">
                    <span className="text-xl font-bold mb-4">Juego 4</span>
                    <p className="text-gray-700">
                        Descripción breve del juego 4. Es uno de los más jugados este año.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-md">
                    <span className="text-xl font-bold mb-4">Juego 5</span>
                    <p className="text-gray-700">
                        Descripción breve del juego 5. Tiene una jugabilidad muy entretenida.
                    </p>
                </div>
            </div>
        </section>
    );
}
