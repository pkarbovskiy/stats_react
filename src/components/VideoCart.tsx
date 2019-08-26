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
const VideoCart: React.FC<videoCartProps> = (props) => {
    return (
        <div className="video_cart">
            <img className="video_cart--image" src={props.image} />
            <div>
                <span>
                    <Link to={`/player/${props.streamer.id}/${props.streamer.name.toLowerCase()}`}>Ninja</Link>
                    {props.action}
                    <Link to={`/player/${props.player.id}/${props.player.name.toLowerCase()}`}>NinjaSucks</Link>
                </span>
                <span>views: <span>{props.views}</span></span>
            </div>
        </div>
    );
}

export default VideoCart;