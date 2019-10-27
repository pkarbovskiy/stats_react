import React from 'react'
import Slider from '../components/Slider'

const LatestVideos = ({mediaById, mediaSorted}: { mediaById: any; mediaSorted: any }) => 
{
    return (
        <div className="latest_videos">
            {<Slider mediaById={mediaById} mediaSorted={mediaSorted} classNameProp={['side', 'horisontal']} includeStreamerName={true}/>}
        </div>
    )
}

export default LatestVideos