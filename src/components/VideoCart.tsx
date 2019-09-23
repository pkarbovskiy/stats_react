import React from 'react'
import { Link } from 'react-router-dom'
export interface videoCartProps {
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
    views: number;
    image: string;
}
const VideoCart: React.FC<videoCartProps> = (props: videoCartProps) => {
    return (
        <div className="video_cart">
            <img className="video_cart--image" src={props.image} alt={`${props.streamer.name.toLowerCase()} ${props.action} ${props.player.name.toLowerCase()}`} />
            <div className="video_cart__info">
                <Link to={`/player/${props.streamer.id}/${props.streamer.name.toLowerCase()}`} className="video_cart__info__streamer--pic">
                    <img src={`http://streamsnipers.com/static/images/streamers/${props.streamer.name}.png`} alt="top streamer" />
                </Link>
                <span className="video_cart__info__description">
                    {props.streamer.name}
                    {` ${props.action}`}
                    <Link to={`/player/${props.player.id}/${props.player.name.toLowerCase()}`}>{props.player.name}</Link>
                </span>
            </div>
        </div>
    );
}

export default VideoCart;