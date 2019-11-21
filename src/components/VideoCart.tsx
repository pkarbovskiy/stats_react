import React from 'react'
import Since from './Since'
import { Link } from 'react-router-dom'
import { gaEvents } from '../common_function'
import { reactionImage, defaultVideoImage } from '../constants'
import Avatar from './Avatar'

export type videoCartProps = {
    id: number;
    streamer: {
        id: number;
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
    match_on_player_id: boolean;
    title: string;
    imageId: number;
    since: any;
}
const VideoCart = (props: videoCartProps) => {
    let { id, streamer, match_on_player_id, player, since, videoId, title, imageId = '', timestamp = '', includeAvatar = false, includeStreamerName = false } = props
    videoId = videoId || id
    function error(event: any) {
        event.target.src = defaultVideoImage
    }
    let killMsg = match_on_player_id ? `eliminated` : `eliminated by`
    const videoUrl = `/video/${videoId}/${timestamp ? `timer/${timestamp}/` : ''}`
    const playerUrl = `/player/${player.id}/${player.slug}`
    return (
        <div className="video_cart">
            <div className="video_cart__streamername">
                {includeStreamerName ? `${streamer.name}` : null}
            </div>
            <Link to={videoUrl} className="video_cart--link" onClick={() => gaEvents({ eventCategory: 'Slider', eventAction: 'click', eventLabel: `${videoId}` })}>
                <img className="video_cart--image"
                    onError={error}
                    src={reactionImage.replace('::id', `${imageId ? imageId : id}`)}
                    alt={title === void 0 ? `${player.name}` : title}
                />
                <Since since={since} />
            </Link>
            <div className="video_cart__info">
                {includeAvatar ?
                    <Link to={`/player/${streamer.id}/${streamer.slug}`} className="video_cart__info__streamer--pic">
                        <Avatar player={streamer} />
                    </Link> :
                    ''
                }
                {includeStreamerName ?
                    <span className={`video_cart__info__description${title != null ? ' title' : ''}`}>
                        {title === void 0 ? <Link to={playerUrl}>{player.name}</Link> : title}
                    </span>
                    :
                    <span className={`video_cart__info__name${title != null ? ' title' : ''}`}>
                        {title === void 0 ? <Link to={playerUrl}>{`${killMsg}`}<br />{`${player.name}`}</Link> : title}
                    </span>
                }
            </div>
        </div>
    )
}


export default VideoCart