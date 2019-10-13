import React from 'react'
import VideoCart, { videoCartProps } from './VideoCart'

const Table = ({ mediaSorted, mediaById, playersById, classNameProp = '' }: any) => (
    <div className={`table ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`}>
        {mediaSorted.map((value: any, indx: number) => <VideoCart key={mediaById[value].id} {...mediaById[value]} />)}
    </div>
)


export default Table