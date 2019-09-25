import React, { useState, useRef, useEffect } from 'react'
import ReactDom from 'react-dom'
import VideoCart, { videoCartProps } from './VideoCart'

const Table: React.FC<{ videos: any; classNameProp?: string | string[] }> = ({ videos, classNameProp = '' }) => {
    const items: any = useRef(false)
    let posX1 = 0,
        posX2 = 0,
        posInitial: number,
        posFinal: number,
        threshold = 222,
        index = 0,
        slideSize = 222,
        allowShift = true

    useEffect(() => {
        items.current.onmousedown = dragStart
        // Touch events
        items.current.addEventListener('touchstart', dragStart)
        items.current.addEventListener('touchend', dragEnd)
        items.current.addEventListener('touchmove', dragAction)

        items.current.addEventListener('transitionend', checkIndex);
        return () => {
            items.current.removeEventListener('touchstart', dragStart)
            items.current.removeEventListener('touchend', dragEnd)
            items.current.removeEventListener('touchmove', dragAction)
            items.current.removeEventListener('transitionend', checkIndex);
        }
    }, [])

    function dragStart(e: any) {
        e.preventDefault()
        posInitial = items.current.offsetLeft

        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientX
        } else {
            posX1 = e.clientX
            document.onmouseup = dragEnd
            document.onmousemove = dragAction
        }
    }

    function dragAction(e: any) {
        const position = e.type == 'touchmove' ? e.touches[0].clientX : e.clientX

        posX2 = posX1 - position
        posX1 = position

        items.current.style.left = (items.current.offsetLeft - posX2) + "px"
    }

    function dragEnd(e: any) {
        document.onmouseup = null
        document.onmousemove = null
        posFinal = items.current.offsetLeft
        if (posFinal - posInitial < -threshold) {
            shiftSlide(1, 'drag')
            return
        }
        if (posFinal - posInitial > threshold) {
            shiftSlide(-1, 'drag')
            return
        }

        items.current.style.left = (posInitial) + "px"
    }

    function shiftSlide(direction: 1 | -1, action = '') {
        items.current.classList.add('shifting')

        if (allowShift) {
            if (!action) { posInitial = items.current.offsetLeft }
            items.current.style.left = (posInitial + direction * slideSize) + "px"
            index += direction
        }

        allowShift = false
    }

    function checkIndex() {
        items.current.classList.remove('shifting');

        if (index == -1) {
            items.current.style.left = -(videos.length * slideSize) + "px";
            index = videos.length - 1;
        }

        if (index == videos.length) {
            items.current.style.left = -(1 * slideSize) + "px";
            index = 0;
        }

        allowShift = true;
    }
    return (
        <div className="table-wrapper">
            <div className="wrapper">
                <div className={`table ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`} ref={items}>
                    {videos.map((value: videoCartProps, indx: number) => (<VideoCart key={indx} {...value} />))}
                </div>
            </div>
            <button className="table__previous" onClick={() => shiftSlide(-1)}>
                <svg viewBox="0 0 24 24">
                    <g>
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </g></svg>
            </button>
            <button className="table__next" onClick={() => shiftSlide(1)}>
                <svg viewBox="0 0 24 24">
                    <g>
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </g></svg>
            </button>
        </div>
    )
}

export default Table