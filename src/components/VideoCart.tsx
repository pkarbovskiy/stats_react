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
    action_id: string;
    videoId?: number;
    clipId: number | '';
    includeAvatar: boolean;
    title: string;
}
const VideoCart = (props: videoCartProps) => {
    const { id, streamer, player, streamStart, action_id, videoId, title = '', clipId = '', includeAvatar = false } = props
    console.log(props)
    return (
        <div className="video_cart">
            <Link to={`/video/${videoId}/${clipId ? `clip/${clipId}/` : ''}`}>
                {/* <img className="video_cart--image" src={image} alt={title ? title : `${streamer.name} ${action} ${player.name}`} /> */}
                <img className="video_cart--image" src={`https://d38ev7kpu49one.cloudfront.net/${id}.png`} />
            </Link>
            <div className="video_cart__info">
                {includeAvatar ?
                    <Link to={`/player/${streamer.id}/${streamer.slug}`} className="video_cart__info__streamer--pic">
                        <img src={`http://streamsnipers.com/static/images/streamers/${streamer.name}.png`} alt="top streamer" />
                    </Link> :
                    ''
                }
                <span className="video_cart__info__description">
                    {/* {title ? title : [`${streamer.name} ${action} `, <Link to={`/player/${player.id}/${player.slug}`}>{player.name}</Link>]} */}
                    {title}
                </span>
            </div>
        </div>
    )
}


export default VideoCart