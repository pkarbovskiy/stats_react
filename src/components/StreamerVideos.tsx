import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'
const StreamerVideos = ({ streamer, mediaById, mediaSorted }: { streamer: { id: number, name: string; slug: string }; mediaById: any; mediaSorted: any }) => {
    return (
        <div className="streamer_video">
            <div className="streamer_video__info">
                <Link to={`/player/${streamer.id}/${streamer.slug}`} className="streamer_video__info--pic">
                    <img src={`//d38ev7kpu49one.cloudfront.net/featured_streamers/${streamer.id}.png`} alt="top streamer" />
                </Link>
                <h2>{streamer.name}</h2><Link to={`/player/${streamer.id}/${streamer.slug}/videos`} className="small_link">view all</Link>
            </div>
            {<Slider mediaById={mediaById} mediaSorted={mediaSorted} classNameProp={['side', 'horisontal']} />}
        </div>
    )
}

export default StreamerVideos