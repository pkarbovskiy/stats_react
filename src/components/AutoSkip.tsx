import React, { useEffect, useState, useRef } from 'react'
import { gaEvents } from '../common_function'

type timer = {
    id: number;
    startTime: number;
    endTime: number;
    actionId: number;
}
type DeathKillProps = {
    deathKillTimers: any;
    videoHandler: any;
}

const Autoskip = ({ deathKillTimers, videoHandler }: DeathKillProps) => {
    let index: number = 0
    const timers = deathKillTimers.mergedEvents
    const [activityStatus, onChangeStatus] = useState(false)
    const id: any = useRef()
    function autoskipAndTrack() {
        gaEvents({ eventCategory: 'Autoskip', eventAction: 'click', eventLabel: `${activityStatus ? 'enabled' : 'disabled'}` })
        onChangeStatus(oldState => !oldState)
    }
    function checkAndMoveToNextEvent() {
        let currentTime: number = videoHandler.getCurrentTime()
        // we are before the first event jump to it
        if (index == null || currentTime < timers[0][0]) {
            index = 0
        }
        // we are inside an event dont need to do nothing
        if (currentTime >= timers[index][0] && currentTime <= timers[index][1] + 3) {
            return
        }
        // we after the last event keep index as last event and pause the video
        if (currentTime > timers[timers.length - 1][1] + 3) {
            index = timers.length - 1
            videoHandler.pause()
            return
        }
        // we hit end of the event got to next
        if (currentTime >> 0 === timers[index][1] + 4) {
            index++
            videoHandler.seek(timers[index][0])
            return
        }
        // we are in between events we need to find right event
        if (currentTime > timers[index][1] + 3) {
            //let's find proper event if user is seeking manually
            for (let i = index + 1; index < timers.length; i++) {
                index = i
                if (timers[i][1] < currentTime) {
                    continue
                }
                if (timers[i][0] > currentTime) {
                    break
                }
            }
        }
        videoHandler.seek(timers[index][0])

    }
    useEffect(() => {
        if (!videoHandler) {
            return
        }
        if (!activityStatus) {
            if (!id.current) {
                return
            }
            clearInterval(id.current)
        }

        id.current = setInterval(checkAndMoveToNextEvent, 1000)

        return () => {
            clearInterval(id.current)
            id.current = 0
        }
    }, [videoHandler, activityStatus])

    return (
        <div className="autoskip_switch">
            <button className={`autoskip_switch--btn ${activityStatus ? 'enabled' : 'disabled'}`} onClick={() => autoskipAndTrack()}>
                <svg viewBox="0 0 512 512" className="off">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0
                            448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200
                            200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7
                            4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17
                            0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17
                            0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z">
                    </path>
                </svg>
                <svg viewBox="0 0 512 512" className="on">
                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248
                            248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0
                            110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532
                            89.451-200 200-200m140.204
                            130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346
                            303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705
                            4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736
                            16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z">
                    </path>
                </svg>
                <label className="autoskip_switch--btn--label">{activityStatus ? 'N' : 'FF'}</label>
            </button>
            <span>Autoskip</span>
        </div>
    )
}

export default Autoskip