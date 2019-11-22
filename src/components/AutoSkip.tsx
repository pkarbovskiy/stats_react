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
    const timers = [].concat(deathKillTimers['eliminated'] || [], deathKillTimers['eliminatedby']).sort((a, b) => a[0] - b[0])
    const [checkBoxStatus, onChangeStatus] = useState(false)
    const id: any = useRef()
    function autoskipAndTrack() {
        gaEvents({ eventCategory: 'Autoskip', eventAction: 'click', eventLabel: `${checkBoxStatus ? 'enabled' : 'disabled'}` })
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
        if (!checkBoxStatus) {
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
    }, [videoHandler, checkBoxStatus])

    return (
        <div className="AutoskipSwitch">
            <label className="switch">
                <input type="checkbox" id="autoskip" onChange={() => autoskipAndTrack()} />
                <span className="autoskip round"></span>
            </label>
            <label className="text" htmlFor="autoskip">Autoskip</label>
        </div>
    )
}

export default Autoskip