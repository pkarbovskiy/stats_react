import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import Slider from './Slider'
import { gaEvents } from '../common_function'

const StreamerVideosNoHeader = ({ streamer, mediaById, mediaSorted, gaEvent }: { streamer: { id: number, name: string; slug: string }; mediaById: any; mediaSorted: any; gaEvent?: string }) => {
    const [isOpened, setStatus] = useState(false)
    const clipsUrl = `/player/${streamer.id}/${streamer.slug}/clips`
    function openCloseDrawer(place: string) {
        setStatus(isOpened => !isOpened)
        gaEvents({ eventCategory: `${gaEvent}::drawer`, eventAction: 'click', eventLabel: `${place}` })
    }
    return (
        <div className="streamer_video">
            <div className="streamer_video__info">
                {/* <Avatar player={streamer} /> */}
                <h2 className="no_header" onClick={() => openCloseDrawer('header')}>{streamer.name}</h2>
                <div className={isOpened ? 'down' : 'up'} onClick={() => openCloseDrawer('arrow')}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path>
                    </svg>
                </div>
                <Link to={clipsUrl} className="small_link" onClick={() => gaEvents({ eventCategory: `${gaEvent}`, eventAction: 'click', eventLabel: `View Reactions Link` })}>View Reactions ></Link>
            </div>
            {isOpened && <Slider mediaById={mediaById} mediaSorted={mediaSorted} classNameProp={['side', 'horisontal']} includeStreamerName={false} gaEvent={gaEvent} />}
        </div>
    )
}

export default StreamerVideosNoHeader