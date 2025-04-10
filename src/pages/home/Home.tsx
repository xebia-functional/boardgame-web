import boardGames from '/boardGames.jpg';
import '@justinribeiro/lite-youtube';

const Home = () => {
    return (
        <>
            <section className="relative w-full">
                <img src={boardGames} alt="Board Games" className="w-full h-64 object-cover" />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl text-center font-semibold w-full p-2">
                    La mejor forma de divertirte en familia
                </h2>
            </section>

            <section className="mx-auto w-full p-4">
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
            <section className="my-8 px-4">
                <h3 className="text-2xl font-semibold text-center mb-8">Mira nuestros trailers</h3>

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
                        <lite-youtube
                            videoid="oiQ6SgBzfqY"
                            placeholder="https://img.youtube.com/vi/oiQ6SgBzfqY/0.jpg"
                        ></lite-youtube>
                    </div>

                    <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
                        <lite-youtube
                            videoid="p4fB42w15Tw"
                            placeholder="https://img.youtube.com/vi/p4fB42w15Tw/0.jpg"
                        ></lite-youtube>
                    </div>

                    <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
                        <lite-youtube
                            videoid="ojkScPkdgsk"
                            placeholder="https://img.youtube.com/vi/ojkScPkdgsk/0.jpg"
                        ></lite-youtube>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
