import React from 'react'
import VideoCart from '../lol/VideoCart'

const Table = ({ matches, streamers, gaEvent, currentPlayer }: any) => {

    if (!matches || matches.length === 0) {
        return null
    }

    return (
        <div className={`flex flex-wrap flex-col sm:flex-row my-4ss`}>
            {matches.map((match: any) =>
                <VideoCart key={match.match_id} {...match} streamer={streamers[match.streamer_id]} currentPlayer={currentPlayer} gaEvent={gaEvent} />)}
        </div>
    )
}



export default Table