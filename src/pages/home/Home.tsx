import boardGames from '/boardGames.jpg';

const Home = () => {
  return (
    <div>
      <div className="relative w-full h-64">
        <img
          src={boardGames}
          alt="Board Games"
          className="w-full h-full object-cover"
        />
        <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-semibold">
          La mejor forma de divertirte en familia
        </h3>
      </div>

      <div className="mx-auto w-full p-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Nuestros juegos más famosos 🔥</h1>

        <div className="flex flex-wrap justify-center gap-6 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-md">
            <h3 className="text-xl font-bold mb-4">Juego 1</h3>
            <p className="text-gray-700">
              Descripción breve del juego 1. Este es un juego muy popular entre los usuarios.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-md">
            <h3 className="text-xl font-bold mb-4">Juego 2</h3>
            <p className="text-gray-700">
              Descripción breve del juego 2. Es uno de los más jugados este año.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-md">
            <h3 className="text-xl font-bold mb-4">Juego 3</h3>
            <p className="text-gray-700">
              Descripción breve del juego 3. Tiene una jugabilidad muy entretenida.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-md">
            <h3 className="text-xl font-bold mb-4">Juego 4</h3>
            <p className="text-gray-700">
              Descripción breve del juego 4. Es uno de los más jugados este año.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-md">
            <h3 className="text-xl font-bold mb-4">Juego 5</h3>
            <p className="text-gray-700">
              Descripción breve del juego 5. Tiene una jugabilidad muy entretenida.
            </p>
          </div>
        </div>
      </div>
      <div className="my-8 px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Mira nuestros trailers</h2>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/oiQ6SgBzfqY?si=ZKG5hzHK9Fv-oqnu"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/p4fB42w15Tw?si=3KLh6W7-89MB2tKA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ojkScPkdgsk?si=0Yyfuoz73hG6pZ5b"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
