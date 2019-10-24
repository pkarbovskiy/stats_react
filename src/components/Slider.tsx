import React, { useRef } from 'react'
import VideoCart, { videoCartProps } from './VideoCart'

const Slider = ({ mediaSorted, mediaById, classNameProp = '' , includeStreamerName = false}: 
{ mediaSorted: any; mediaById: any; classNameProp?: string | string[]; includeStreamerName: boolean }) => {
    const item = 202 // cart size TODO: may be calculate dynamically 
    const items: any = useRef(false)
    function scroll(direction: 1 | -1) {
        if (items.current.scrollLeft % item !== 0) {
            items.current.scrollLeft = ((items.current.scrollLeft / item) | 0) * item
        }
        items.current.scrollLeft += direction * item
    }
    return (
        <div className="slider-wrapper">
            <div className={`slider ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`} ref={items}>
                {mediaSorted.map((value: any) => {
                    return <VideoCart key={mediaById[value].id} {...mediaById[value]} includeStreamerName={includeStreamerName}/>
                })}
            </div>
            <button className="slider__previous" onClick={() => scroll(-1)}>
                <svg viewBox="0 0 24 24">
                    <g>
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </g></svg>
            </button>
            <button className="slider__next" onClick={() => scroll(1)}>
                <svg viewBox="0 0 24 24">
                    <g>
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </g></svg>
            </button>
        </div>
    )
}

export default Slider