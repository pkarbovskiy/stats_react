import React from 'react'
import VideoCart, { videoCartProps } from './VideoCart'

const Table = ({ mediaSorted, mediaById, playersById, gaEvent, classNameProp = '' }: any) => (
    <div className={`table ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`}>
        {mediaSorted.map((id: number) => <VideoCart key={id} {...mediaById[id]} gaEvent={gaEvent} />)}
    </div>
)


export default Table