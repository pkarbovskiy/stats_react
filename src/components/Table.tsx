import React from 'react'
import VideoCart, { videoCartProps } from './VideoCart'

const Table = ({ mediaSorted, mediaById, playersById, classNameProp = '' }: any) => (
    <div className={`table ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`}>
        {mediaSorted.map((value: any, indx: number) => {
            const video: videoCartProps = Object.assign({}, mediaById[value])
            video.streamer = playersById[mediaById[value].streamer_id]
            return <VideoCart key={video.id} {...video} />
        })}
    </div>
)


export default Table