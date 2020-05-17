import React from 'react'
import VideoCart, { videoCartProps } from './VideoCart'

const Table = ({ mediaSorted, mediaById, playersById, gaEvent, classNameProp = '', singleColumn, darkMode }: any) => (
    <div className={`flex flex-wrap flex-col sm:flex-row my-4 ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`}>
        {mediaSorted.map((id: number) => <VideoCart key={id} {...mediaById[id]} gaEvent={gaEvent} singleColumn={singleColumn} darkMode={darkMode} />)}
    </div>
)


export default Table