import React, { useEffect, useState } from 'react'

type timer = {
    id: number;
    startTime: number;
    endTime: number;
    actionId: number;
}
type DeathKillProps = {
    deathKillTimers: timer[];
    videoHandler: any;
}

const Autoskip = ({ deathKillTimers, videoHandler }: DeathKillProps) => {
    let index: number = 0
    let id: any = 0
    const [checkBoxStatus, onChangeStatus] = useState(false)
    function checkAndMoveToNextEvent() {
        let currentTime: number = videoHandler.getCurrentTime()
        // we are before the first event jump to it
        if (index == null || currentTime < deathKillTimers[0].startTime) {
            index = 0
        }
        // we are inside an event dont need to do nothing
        if (currentTime >= deathKillTimers[index].startTime && currentTime <= deathKillTimers[index].endTime + 3) {
            return
        }
        // we after the last event keep index as last event and pause the video
        if (currentTime > deathKillTimers[deathKillTimers.length - 1].endTime + 3) {
            index = deathKillTimers.length - 1
            videoHandler.pause()
            return
        }
        // we hit end of the event got to next
        if (currentTime >> 0 === deathKillTimers[index].endTime + 4) {
            index++
            videoHandler.seek(deathKillTimers[index].startTime)
            return
        }
        // we are in between events we need to find right event
        if (currentTime > deathKillTimers[index].endTime + 3) {
            //let's find proper event if user is seeking manually
            for (let i = index + 1; index < deathKillTimers.length; i++) {
                index = i
                if (deathKillTimers[i].endTime < currentTime) {
                    continue
                }
                if (deathKillTimers[i].startTime > currentTime) {
                    break
                }
            }
        }
        videoHandler.seek(deathKillTimers[index].startTime)

    }
    useEffect(() => {
        if (!videoHandler) {
            return
        }
        if (!checkBoxStatus) {
            if (!id) {
                return
            }
            clearInterval(id)
        }

        id = setInterval(checkAndMoveToNextEvent, 1000)

        return () => {
            clearInterval(id)
            id = 0
        }
    }, [videoHandler, checkBoxStatus])

    return (
        <div>
            <input type="checkbox" id="autoskip" onChange={() => onChangeStatus(oldState => !oldState)} />
            <label htmlFor="autoskip">Autoskip</label>
        </div>
    )
}

export default Autoskip