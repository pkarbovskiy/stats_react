import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
const StreamerVideos = ({ streamer, videos }: { streamer: { id: number, name: string }, videos: any }) => {
    return (
        <div className="streamer_video">
            <div className="streamer_video__info">
                <Link to={`/player/${streamer.id}/${streamer.name.toLowerCase()}`} className="streamer_video__info--pic">
                    <img src={`http://streamsnipers.com/static/images/streamers/${streamer.name}.png`} alt="top streamer" />
                </Link>
                <h2>{streamer.name}</h2><Link to="">View All > </Link>
            </div>
            <Slider videos={videos} classNameProp={['side', 'horisontal']} />
        </div>
    )
}

export default StreamerVideos