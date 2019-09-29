import React from 'react'
import { Link } from 'react-router-dom'
export type videoCartProps = {
    streamer: {
        id: number | string;
        name: string;
    },
    player: {
        id: number | string;
        name: string;
    },
    streamStart: number;
    action: string;
    image: string;
    videoId: number;
    clipId?: number;
}
const VideoCart = ({ streamer, player, streamStart, action, image, videoId, clipId }: videoCartProps) => (
    <div className="video_cart">
        <Link to={`/video/${videoId}/${clipId ? `clip/${clipId}/` : ''}`}>
            <img className="video_cart--image" src={image} alt={`${streamer.name.toLowerCase()} ${action} ${player.name.toLowerCase()}`} />
        </Link>
        <div className="video_cart__info">
            <Link to={`/player/${streamer.id}/${streamer.name.toLowerCase()}`} className="video_cart__info__streamer--pic">
                <img src={`http://streamsnipers.com/static/images/streamers/${streamer.name}.png`} alt="top streamer" />
            </Link>
            <span className="video_cart__info__description">
                {streamer.name}
                {` ${action}`}
                <Link to={`/player/${player.id}/${player.name.toLowerCase()}`}>{player.name}</Link>
            </span>
        </div>
    </div>
)


export default VideoCart