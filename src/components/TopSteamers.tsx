import React from 'react';
import { Link } from 'react-router-dom';
import { topStreamers } from '../interfaces/interfaces';
//TODO if ever we put this back we need to verify url for img and make it cloud foundry
const TopStreamers: React.FC<{ topStreamers: topStreamers }> = (props: { topStreamers: topStreamers }) => {
    const { topStreamers } = props;
    return (
        <section className="top_streamers">
            {Object.keys(topStreamers).map(streamerName =>
                (
                    <Link
                        to={`/fortnite/player/${topStreamers[streamerName]}/${streamerName.toLowerCase()}`}
                    >
                        <img src={`http://vodsearch.tv/static/images/streamers/${streamerName}.png`} alt="top streamer" />
                        <h3>{streamerName}</h3>
                    </Link>
                )
            )}
        </section>
    )
};
export default TopStreamers;