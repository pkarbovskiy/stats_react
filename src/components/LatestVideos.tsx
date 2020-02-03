import React from 'react'
import Table from '../components/Table'

const LatestVideos = ({ mediaById, mediaSorted, gaEvent }: { mediaById: any; mediaSorted: any; gaEvent?: string }) => {
    return (
        <div className="latest_videos">
            {<Table mediaById={mediaById} mediaSorted={mediaSorted} classNameProp={['side', 'horisontal']} includeStreamerName={true} gaEvent={gaEvent} />}
        </div>
    )
}

export default LatestVideos