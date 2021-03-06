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
    avatar: boolean | string;
    includeStreamerName: boolean;
    match_on_player_id: boolean;
    title?: string;
    imageId: number;
    since: any;
    gaEvent?: string;
    c_title?: string;
    singleColumn?: boolean;
    darkMode?: boolean;
}
const VideoCart = (props: videoCartProps) => {
    let { id, streamer, match_on_player_id, player, since, videoId, title, c_title, imageId = '', timestamp = '', avatar = false, includeStreamerName = false, gaEvent, singleColumn = false, darkMode = false } = props
    videoId = videoId || id
    function error(event: any) {
        event.target.src = defaultVideoImage
    }
    let killMsg = match_on_player_id ? `eliminated` : `eliminated by`
    const videoUrl = `/fortnite/video/${videoId}/${timestamp ? `timer/${timestamp}/` : ''}`
    const playerUrl = `/fortnite/player/${(player || {}).id}/${(player || {}).slug}`
    return (
        <div className={`${singleColumn ? ' sm:w-full' : 'w-full sm:w-1/2 xl:w-1/4'} ${darkMode ? ' sm:w-full py-2' : 'w-full sm:w-1/2 xl:w-1/4 py-2 sm:p-2'} `}>
            <div className={`${darkMode ? 'bg-primary-900 text-indigo-300 font-bold text-xs' : 'bg-white text-gray-800'} relative shadow p-2 rounded-lg hover:shadow-lg transition duration-300 ease-in-out`}>
                <Link
                    className="relative block object-cover w-full h-40 mb-2 rounded-lg rounded-b-none"
                    to={videoUrl}
                    onClick={() => gaEvents({ eventCategory: `${gaEvent}`, eventAction: `video_id::${videoId}${timestamp ? `::timestamp::${timestamp}` : ''}`, eventLabel: `video_id::${videoId}${timestamp ? `::timestamp::${timestamp}` : ''}` })}
                >
                    <img className="object-cover w-full h-40 mb-2 transition duration-700 ease-out rounded-lg rounded-b-none hover:opacity-75"
                        onError={error}
                        loading="lazy"
                        src={reactionImage.replace('::id', `${imageId ? imageId : id}`)}
                        alt={title === void 0 ? `${player.name}` : title}
                    />
                    <Since since={since} />
                </Link>


                <div className={`flex items-center leading-tight ${darkMode ? 'h-8' : 'h-12'} `}>
                    {avatar ?
                        <Link
                            to={`/fortnite/player/${streamer.id}/${streamer.slug}`}
                            onClick={() => gaEvents({ eventCategory: `${gaEvent}:avatar`, eventAction: 'click', eventLabel: `${videoId}` })}
                        >
                            <Avatar player={streamer} />
                        </Link>
                        :
                        ''
                    }
                    <div>
                        {includeStreamerName ?
                            <div className={`text-purple-500 font-bold${title != null ? ' title' : ''}`}>
                                {title === void 0 ? <Link to={playerUrl}>{player.name}</Link> : title}
                            </div>
                            :
                            <div className={`video_cart__info__name${title != null ? ' title' : ''}${avatar ? ' avatar' : ''}`}>
                                {avatar && c_title ?
                                    <>
                                        <Link to={`/fortnite/player/${streamer.id}/${streamer.slug}`} className="font-bold text-purple-500 block" onClick={() => gaEvents({ eventCategory: `${gaEvent}:video cart:player name:${streamer.name}`, eventAction: 'click', eventLabel: `video cart` })}>{streamer.name}</Link>
                                        <Link className="text-sm font-medium text-black" to={videoUrl} onClick={() => gaEvents({ eventCategory: `${gaEvent}`, eventAction: 'click', eventLabel: `${videoId}` })}>{c_title}</Link>
                                    </> :
                                    avatar ?
                                        <div className="font-bold text-purple-500">{streamer.name}</div> :
                                        title === void 0 && player.name !== 'victory' ?
                                            <Link to={playerUrl} className="text-sm font-medium text-black" onClick={() => gaEvents({ eventCategory: `${gaEvent}:player_url`, eventAction: 'click', eventLabel: `${videoId}` })}>{`${killMsg}`}<br />{`${player.name}`}</Link> :
                                            (title ? title : 'Victory Royale')
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default VideoCart