import React, { useRef } from 'react'
import VideoCart, { videoCartProps } from './VideoCart'

const Table = ({ videos, classNameProp = '' }: { videos: any; classNameProp?: string | string[] }) => {
    const item = 202
    const items: any = useRef(false)
    function scroll(direction: 1 | -1) {
        if (items.current.scrollLeft % item !== 0) {
            items.current.scrollLeft = ((items.current.scrollLeft / item) | 0) * item
        }
        items.current.scrollLeft += direction * item
    }
    return (
        <div className="table-wrapper">
            <div className={`table ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`} ref={items}>
                {videos.map((value: videoCartProps, indx: number) => (<VideoCart key={indx} {...value} />))}
            </div>
            <button className="table__previous" onClick={() => scroll(-1)}>
                <svg viewBox="0 0 24 24">
                    <g>
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </g></svg>
            </button>
            <button className="table__next" onClick={() => scroll(1)}>
                <svg viewBox="0 0 24 24">
                    <g>
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </g></svg>
            </button>
        </div>
    )
}

export default Table