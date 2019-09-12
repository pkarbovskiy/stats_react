import React from 'react';
import { Link } from 'react-router-dom';
interface videoCartProps {
    streamer: {
        id: number | string;
        name: string;
    },
    player: {
        id: number | string;
        name: string;
    },
    action: string;
    views: number;
    image: string;
}
const VideoCart: React.FC<videoCartProps> = (props: videoCartProps) => {
    return (
        <div className="video_cart">
            <img className="video_cart--image" src={props.image} alt={`${props.streamer.name.toLowerCase()} ${props.action} ${props.player.name.toLowerCase()}`} />
            <div className="video_cart__info">
                <span className="video_cart__info__description">
                    <Link to={`/player/${props.streamer.id}/${props.streamer.name.toLowerCase()}`}>{props.streamer.name}</Link>
                    {props.action}
                    <Link to={`/player/${props.player.id}/${props.player.name.toLowerCase()}`}>{props.player.name}</Link>
                </span>
                <span>views: <span>{props.views}</span></span>
            </div>
        </div>
    );
}

export default VideoCart;