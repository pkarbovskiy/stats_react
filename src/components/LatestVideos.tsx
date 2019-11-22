import React from 'react'
import Slider from '../components/Slider'

const LatestVideos = ({ mediaById, mediaSorted, gaEvent }: { mediaById: any; mediaSorted: any; gaEvent?: string }) => {
    return (
        <div className="latest_videos">
            {<Slider mediaById={mediaById} mediaSorted={mediaSorted} classNameProp={['side', 'horisontal']} includeStreamerName={true} gaEvent={gaEvent} />}
        </div>
    )
}

export default LatestVideos