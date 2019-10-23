import React from 'react'
import { Link } from 'react-router-dom'
import { bool } from 'prop-types';
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
    let { id, streamer, player, streamStart, action, videoId, imageId = '', title = '', timestamp = '', includeAvatar = false, includeStreamerName } = props
    videoId = videoId || id
    var newTitle
    if (includeStreamerName && (typeof streamer != 'undefined')) {
        newTitle = streamer.name + ": " + title
    }
    else {
        newTitle = title
    }
    return (
        <div className="video_cart">
            <Link to={`/video/${videoId}/${timestamp ? `timer/${timestamp}/` : ''}`}>
                <img className="video_cart--image" src={`https://d38ev7kpu49one.cloudfront.net/${imageId ? imageId : id}.png`} alt={title ? title : `${player.name}`} />
            </Link>
            <div className="video_cart__info">
                {includeAvatar ?
                    <Link to={`/player/${streamer.id}/${streamer.slug}`} className="video_cart__info__streamer--pic">
                        <img src={`http://streamsnipers.com/static/images/streamers/${streamer.name}.png`} alt="top streamer" />
                    </Link> :
                    ''
                }
                <span className="video_cart__info__description">
                    {newTitle ? newTitle.slice(0, 27) + "..." : <Link to={`/player/${player.id}/${player.slug}`}>{player.name}</Link>
                    }
                </span>
            </div>
        </div>
    )
}


export default VideoCart