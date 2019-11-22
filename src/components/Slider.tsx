import React, { useRef, useEffect, useState } from 'react'
import VideoCart from './VideoCart'
import { isMobile } from '../constants'

const Slider = ({ mediaSorted, mediaById, classNameProp = '', includeStreamerName = false, gaEvent }:
    { mediaSorted: any; mediaById: any; classNameProp?: string | string[]; includeStreamerName: boolean; gaEvent?: string }) => {
    //TODO: refactor
    // @ts-ignore
    const elementsOnLoad = isMobile && ((isMobile || { input: '' }).input || '').indexOf('ipad') === -1 ? 2 : 6
    const [mediaSortedSlice, setMediaSorted] = useState(mediaSorted.slice(0, elementsOnLoad))
    const item = 202 // cart size TODO: may be calculate dynamically 
    const items: any = useRef(false)
    useEffect(() => {
        function scrollAndAdd() {

            if (items.current.scrollWidth - items.current.clientWidth - items.current.scrollLeft < 50) {
                setMediaSorted((state: any) => state.concat(mediaSorted.slice(state.length, state.length + 2)))
            }

            if (mediaSortedSlice.length === mediaSorted.legnth) {
                window.removeEventListener('scroll', scrollAndAdd)
            }
        }
        items.current.addEventListener('scroll', scrollAndAdd)
        return () => {
            items.current.removeEventListener('scroll', scrollAndAdd)
        }
    }, [items])

    function scroll(direction: 1 | -1) {
        if (items.current.scrollLeft % item !== 0) {
            items.current.scrollLeft = ((items.current.scrollLeft / item) | 0) * item
        }
        items.current.scrollLeft += direction * item
    }
    return (
        <div className="slider-wrapper">
            <div className={`slider ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`} ref={items}>
                {mediaSortedSlice.map((value: any) =>
                    <VideoCart key={mediaById[value].id} {...mediaById[value]} includeStreamerName={includeStreamerName} gaEvent={gaEvent} />
                )}
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