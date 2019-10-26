import React from 'react'
import Slider from '../components/Slider'

const LatestVideos = ({mediaById, mediaSorted}: { mediaById: any; mediaSorted: any }) => 
{
    return (
        <div className="latest_videos">
            <div className="latest_videos__info">
                <h3>Latest Broadcasts </h3>
            </div>
            {<Slider mediaById={mediaById} mediaSorted={mediaSorted} classNameProp={['side', 'horisontal']} includeStreamerName={true}/>}
        </div>
    )
}

export default LatestVideos