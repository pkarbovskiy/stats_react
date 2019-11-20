import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
import Avatar from '../components/Avatar'

const StreamerVideos = ({ streamer, mediaById, mediaSorted }: { streamer: { id: number, name: string; slug: string }; mediaById: any; mediaSorted: any }) => {
    function error(event: any) {
        event.target.src = "//d38ev7kpu49one.cloudfront.net/static/face.svg"
    }
    return (
        <div className="streamer_video">
            <div className="streamer_video__info">
                <Link to={`/player/${streamer.id}/${streamer.slug}`} className="streamer_video__info--pic">
                    <Avatar player={streamer} />
                </Link>
                <Link to={`/player/${streamer.id}/${streamer.slug}`}><h2>{streamer.name}</h2></Link><Link to={`/player/${streamer.id}/${streamer.slug}`} className="small_link">View Profile ></Link>
            </div>
            {<Slider mediaById={mediaById} mediaSorted={mediaSorted} classNameProp={['side', 'horisontal']} includeStreamerName={false} />}
        </div>
    )
}

export default StreamerVideos