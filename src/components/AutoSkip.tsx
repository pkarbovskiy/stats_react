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
        if (index == null) {
            index = 0
        }
        if (currentTime > deathKillTimers[deathKillTimers.length - 1].endTime + 3) {
            index = deathKillTimers.length - 1
            videoHandler.pause()
            return
        }

        if (index >= 0 && index !== deathKillTimers.length) {

            if (currentTime < deathKillTimers[index].endTime - 3 && currentTime > deathKillTimers[index].startTime) {
                return
            }
            if (currentTime > deathKillTimers[index].endTime + 3
                && deathKillTimers[index + 1]
                && currentTime > deathKillTimers[index + 1].endTime + 3
            ) {
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

            if (currentTime > deathKillTimers[index].endTime + 3) {
                index++
            }
            videoHandler.seek(deathKillTimers[index].startTime)
        }
    }
    useEffect(() => {
        if (!videoHandler) {
            return
        }

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