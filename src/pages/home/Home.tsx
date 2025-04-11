import HotGames from '../../components/home/HotGames';
import boardGames from '/boardGames.webp';
import { LiteYoutubeEmbed } from 'react-lite-yt-embed';

export default function Home() {
    return (
        <>
            <section className="relative w-full">
                <img src={boardGames} alt="Board Games" className="w-full h-64 object-cover" />
                <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl text-center font-semibold w-full p-2">
                    La mejor forma de divertirte en familia
                </h2>
            </section>
            <HotGames />
            <section className="my-8 px-4">
                <h3 className="text-2xl font-semibold text-center mb-8">Mira nuestros trailers</h3>

                <div className="flex flex-wrap justify-center gap-8">
                    <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
                        <LiteYoutubeEmbed id="oiQ6SgBzfqY" />
                    </div>

                    <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
                        <LiteYoutubeEmbed id="p4fB42w15Tw" />
                    </div>

                    <div className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
                        <LiteYoutubeEmbed id="ojkScPkdgsk" />
                    </div>
                </div>
            </section>
        </>
    );
}
