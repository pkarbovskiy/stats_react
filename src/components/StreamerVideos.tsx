import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import Avatar from '../components/Avatar'
import { gaEvents } from '../common_function'

const StreamerVideos = ({ streamer, mediaById, mediaSorted, gaEvent }: { streamer: { id: number, name: string; slug: string }; mediaById: any; mediaSorted: any; gaEvent: string; }) => {
    const playerUrl = `/player/${streamer.id}/${streamer.slug}`
    return (
        <div className="streamer_video">
            <div className="streamer_video__info">
                <Link to={playerUrl} className="streamer_video__info--pic" onClick={() => gaEvents({ eventCategory: `${gaEvent}`, eventAction: 'click', eventLabel: `avatar` })}>
                    <Avatar player={streamer} />
                </Link>
                <Link to={playerUrl} onClick={() => gaEvents({ eventCategory: `${gaEvent}`, eventAction: 'click', eventLabel: `Streamer Name` })}>
                    <h2>{streamer.name}</h2>
                </Link>
                <Link to={playerUrl} className="small_link" onClick={() => gaEvents({ eventCategory: `${gaEvent}`, eventAction: 'click', eventLabel: `View Profile` })}>View Profile ></Link>
            </div>
            {<Slider mediaById={mediaById} mediaSorted={mediaSorted} classNameProp={['side', 'horisontal']} includeStreamerName={false} gaEvent={`${gaEvent}::${streamer.id}::${streamer.slug}`} />}
        </div>
    )
}

export default StreamerVideos