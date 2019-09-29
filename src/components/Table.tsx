import React from 'react'
import VideoCart, { videoCartProps } from './VideoCart'

const Table = ({ videos, classNameProp = '' }: { videos: any; classNameProp?: string | string[] }) => (
    <div className={`table ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`}>
        {videos.map((value: videoCartProps, indx: number) => (<VideoCart key={indx} {...value} />))}
    </div>
)


export default Table