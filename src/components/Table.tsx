import React, { useState, useRef } from 'react'
import VideoCart, { videoCartProps } from './VideoCart'

const Table: React.FC<{ videos: any; classNameProp?: string | string[] }> = ({ videos, classNameProp = '' }) => {
    const tableObj: null | any = useRef(null)
    const onButtonClick = (sign: 1 | -1) => {
        if (!tableObj.current.style.marginLeft) {
            tableObj.current.style.marginLeft = "0px"
        }
        tableObj.current.style.marginLeft = `${+tableObj.current.style.marginLeft.split('px')[0] + 202 * sign}px`

    }
    return (
        <div className="table-wrapper">
            <button className="table__previous" onClick={() => onButtonClick(-1)}>
                <svg viewBox="0 0 24 24">
                    <g>
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </g></svg>
            </button>
            <div className={`table ${Array.isArray(classNameProp) ? classNameProp.join(' ') : classNameProp}`} >
                <div className="mover" ref={tableObj}></div>
                {videos.map((value: videoCartProps, indx: number) => (<VideoCart key={indx} {...value} />))}
            </div>
            <button className="table__next" onClick={() => onButtonClick(1)}>
                <svg viewBox="0 0 24 24">
                    <g>
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </g></svg>
            </button>
        </div>
    )
}

export default Table