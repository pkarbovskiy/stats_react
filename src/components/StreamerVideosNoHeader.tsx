import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
                    <svg viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5723 1.84851e-06L12 1.42183L6 7.42183L-2.486e-07 1.42183L1.42773 2.49632e-07L6 4.57227L10.5723 1.84851e-06Z" fill="#666FE4" />
                    </svg>
                </div>
                <Link to={clipsUrl} className="ml-4 text-xs text-primary-500" onClick={() => gaEvents({ eventCategory: `${gaEvent}`, eventAction: 'click', eventLabel: `View Reactions Link` })}>View Reactions</Link>
            </div>
            {isOpened && <Slider mediaById={mediaById} mediaSorted={mediaSorted} classNameProp={['side', 'horisontal']} includeStreamerName={false} gaEvent={gaEvent} />}
        </div>
    )
}

export default StreamerVideosNoHeader