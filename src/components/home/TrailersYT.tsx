import { LiteYoutubeEmbed } from 'react-lite-yt-embed';

export default function TrailersYT() {
    const trailers = [
        {
            id: 'oiQ6SgBzfqY'
        },
        {
            id: 'p4fB42w15Tw'
        },
        {
            id: 'ojkScPkdgsk'
        }
    ];

    return (
        <section className="my-8 px-4">
            <h3 className="text-2xl font-semibold text-center mb-8">Mira nuestros trailers</h3>

            <div className="flex flex-wrap justify-center gap-8">
                {trailers.map(trailer => (
                    <div key={trailer.id} className="w-full sm:w-1/4 md:w-1/4 lg:w-1/4">
                        <LiteYoutubeEmbed id={trailer.id} />
                    </div>
                ))}
            </div>
        </section>
    );
}
