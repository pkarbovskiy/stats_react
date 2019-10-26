import React from 'react'
import { Link } from 'react-router-dom'
export type videoCartProps = {
    id: number;
    streamer: {
        id: number | string;
        name: string;
        slug: string;
    },
    player: {
        id: number | string;
        name: string;
        slug: string;
    },
    streamStart: number;
    action: string;
    videoId?: number;
    timestamp: number | '';
    includeAvatar: boolean;
    includeStreamerName: boolean;
    title: string;
    imageId: number;
}
const VideoCart = (props: videoCartProps) => {
    let { id, streamer, player, streamStart, action, videoId, title, imageId = '', timestamp = '', includeAvatar = false, includeStreamerName = false } = props
    videoId = videoId || id
    function error(event: any) {
        event.target.src = "//d38ev7kpu49one.cloudfront.net/static/image.svg"
    }
    return (
        <div className="video_cart">
            <div className="video_cart__streamername">
                {includeStreamerName ? `${streamer.name}` : null}
            </div>
            <Link to={`/video/${videoId}/${timestamp ? `timer/${timestamp}/` : ''}`}>
                <img className="video_cart--image"
                onError={error} 
                src={`https://d38ev7kpu49one.cloudfront.net/${imageId ? imageId : id}.png`} 
                alt={title === void 0 ? `${player.name}` : title} 
                />
            </Link>
            <div className="video_cart__info">
                {includeAvatar ?
                    <Link to={`/player/${streamer.id}/${streamer.slug}`} className="video_cart__info__streamer--pic">
                        <img src={`http://streamsnipers.com/static/images/streamers/${streamer.name}.png`} alt="top streamer" />
                    </Link> :
                    ''
                }
                <span className="video_cart__info__description">
                    {title === void 0 ? <Link to={`/player/${player.id}/${player.slug}`}>{player.name}</Link> : title}
                </span>
            </div>
        </div>
    )
}


export default VideoCart