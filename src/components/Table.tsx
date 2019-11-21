import React from 'react'
import VideoCart, { videoCartProps } from './VideoCart'

const Table = ({ mediaSorted, mediaById, playersById, classNameProp = '' }: any) => (
    <div className={`table ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`}>
        {mediaSorted.map((id: number) => <VideoCart key={id} {...mediaById[id]} />)}
    </div>
)


export default Table