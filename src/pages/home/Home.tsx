import HotGames from '../../components/home/HotGames';
import TrailersYT from '../../components/home/TrailersYT';
import boardGames from '/boardGames.webp';

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
            <TrailersYT />
        </>
    );
}
