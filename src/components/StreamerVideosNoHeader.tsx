import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from './Slider'

const StreamerVideosNoHeader = ({ streamer, mediaById, mediaSorted }: { streamer: { id: number, name: string; slug: string }; mediaById: any; mediaSorted: any }) => {
    const [isOpened, setStatus] = useState(false)
    return (
        <div className="streamer_video">
            <div className="streamer_video__info">
                <h2 className="no_header" onClick={() => setStatus(isOpened => !isOpened)}>{streamer.name}</h2><div className={isOpened ? 'down' : 'up'} onClick={() => setStatus(isOpened => !isOpened)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path></svg></div><Link to={`/player/${streamer.id}/${streamer.slug}/clips`} className="small_link">View All ></Link>
            </div>
            {isOpened && <Slider mediaById={mediaById} mediaSorted={mediaSorted} classNameProp={['side', 'horisontal']} includeStreamerName={false} />}
        </div>
    )
}

export default StreamerVideosNoHeader