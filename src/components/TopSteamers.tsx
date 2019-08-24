import React from 'react';
import { topStreamers } from '../interfaces/interfaces'

const TopStreamers: React.FC<{ topStreamers: topStreamers }> = (props: { topStreamers: topStreamers }) => {
    const { topStreamers } = props;
    return (
        <section className="top_streamers">
            {Object.keys(topStreamers).map(streamerName =>
                (
                    <a key={topStreamers[streamerName].id} href={`/player/${topStreamers[streamerName].id}/${streamerName.toLowerCase()}`}>
                        <img src={topStreamers[streamerName].src} alt="top streamer" />
                        <h3>{streamerName}</h3>
                    </a>
                )
            )}
        </section>
    )
};
export default TopStreamers;