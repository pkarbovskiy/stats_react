import React, { useEffect } from 'react'

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
    function checkAndMoveToNextEvent() {
        let currentTime: number = videoHandler.getCurrentTime()
        if (index >= 0 && index !== deathKillTimers.length) {
            if (currentTime > deathKillTimers[index].endTime + 3) {
                index++
                videoHandler.seek(deathKillTimers[index].startTime)
            }
        }
    }
    useEffect(() => {
        if (!videoHandler) {
            return
        }
        videoHandler.seek(deathKillTimers[index].startTime)
        let id = setInterval(checkAndMoveToNextEvent, 1000)

        return () => {
            clearInterval(id)
        }
    }, [videoHandler])

    return (
        <>
        </>
    )
}

export default Autoskip