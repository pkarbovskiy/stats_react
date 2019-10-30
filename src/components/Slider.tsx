import React, { useRef, useEffect, useState } from 'react'
import VideoCart from './VideoCart'

const Slider = ({ mediaSorted, mediaById, classNameProp = '' , includeStreamerName = false}: 
{ mediaSorted: any; mediaById: any; classNameProp?: string | string[]; includeStreamerName: boolean }) => {
    const elementsOnLoad = navigator.userAgent.toLowerCase().match(/mobile/i) ? 2 : 6 
    const [mediaSortedSlice, setMediaSorted] = useState(mediaSorted.slice(0, elementsOnLoad))
    const item = 202 // cart size TODO: may be calculate dynamically 
    const items: any = useRef(false)
    useEffect(()=> {
        function scrollHorisontalWheel(event:any) {
            if (event.deltaY > 0) {
                items.current.scrollLeft += 100
            } else {
                items.current.scrollLeft -= 100
            }
        }
        function scrollAndAdd() {
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                console.log('executed')
                setMediaSorted((state: any) => state.concat(mediaSortedSlice.slice(state.length - 1, state.length + 1)))
            }

            if (mediaSortedSlice.length === mediaSorted.lednth) {
                window.removeEventListener('scroll', scrollAndAdd)
            }
        }
        items.current.addEventListener('scroll', scrollAndAdd)
        items.current.addEventListener('wheel', scrollHorisontalWheel)
        return () => {
            items.current.removeEventListener('wheel', scrollHorisontalWheel)
            items.current.removeEventListener('scroll', scrollAndAdd)
        }
    } ,[items])
    useEffect(() => {
        
    }, [])

    function scroll(direction: 1 | -1) {
        if (items.current.scrollLeft % item !== 0) {
            items.current.scrollLeft = ((items.current.scrollLeft / item) | 0) * item
        }
        items.current.scrollLeft += direction * item
    }
    return (
        <div className="slider-wrapper">
            <div className={`slider ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`} ref={items}>
                {mediaSortedSlice.map((value: any) => {
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