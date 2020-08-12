import React from 'react'
import Since from '../Since'
import { Link } from 'react-router-dom'
import { gaEvents } from '../../common_function'
import { matchImage, defaultVideoImage } from '../../constants'
import { convertToStandartTimeOutput } from '../../common_function'
import Avatar from '../Avatar'

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
//@todo add proper type
const ValorantVideoCart = (props: any) => {
    let { id, streamer, player, since, video_id, imageId = '', match_id = '', match_start, match_end, avatar = false, singleColumn = false, darkMode = false, gaEvent, currentPlayer = '' } = props
    const videoId = video_id || id
    function error(event: any) {
        event.target.src = defaultVideoImage
    }
    const time = convertToStandartTimeOutput(match_end - match_start)
    let videoUrl = `/valorant/video/${videoId}/${match_id ? `match/${match_id}/` : ''}`
    if (currentPlayer !== '') {
        videoUrl += `?name=${encodeURI(currentPlayer)}`
    }
    //@todo add slug
    const playerUrl = `/valorant/player/${(player || {}).id}/${(player || {}).slug}`
    // const playerUrl = `/valorant/player/${(player || {}).id}/${(player || {}).slug}`
    return (
        <Link className={`${singleColumn ? ' sm:w-full' : 'w-full sm:w-1/2 xl:w-1/4'} ${darkMode ? ' sm:w-full bg-primary-900 text-indigo-300 font-bold text-xs' : 'w-full sm:w-1/2 xl:w-1/4 bg-white text-gray-800'} video_cart_val_outerlink relative shadow p-2 mr-2 rounded-lg hover:shadow-lg transition duration-300 ease-in-out`} to={videoUrl} onClick={(e) => { e.stopPropagation() }}>
            <div className="relative block object-cover w-full h-40 mb-2 rounded-lg rounded-b-none" onClick={() => gaEvents({ eventCategory: `${gaEvent}`, eventAction: 'click', eventLabel: `${videoId}` })}>
                <img className="object-cover w-full h-40 mb-2 transition duration-700 ease-out rounded-lg rounded-b-none hover:opacity-75 bg-primary-900"
                    onError={error}
                    loading="lazy"
                    src={matchImage.replace('::id', `${imageId ? imageId : match_id}`)}
                    alt={`${streamer.name}`}
                />
                <Since since={since} />
            </div>


            <div className={`flex items-center leading-tight ${darkMode ? 'h-8' : 'h-12'} `}>
                <Link to={`/valorant/player/${streamer.id}`}
                    onClick={() => gaEvents({ eventCategory: `${gaEvent}:avatar:valorant`, eventAction: 'click', eventLabel: `${videoId}` })}>
                    <Avatar player={streamer} />
                </Link>

                <div>
                    <div className="font-bold text-purple-500">{streamer.name}</div>
                    <span>Match duration: {time}</span>
                </div>
            </div>
        </Link>
    )
}


export default ValorantVideoCart