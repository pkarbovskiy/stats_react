import React from 'react'
type timer = number[]
type DeathKillProps = {
    deathKillTimers: any;
    videoHandler: any;
}

const DeathKill = ({deathKillTimers, videoHandler}: DeathKillProps) => {
    const ACTIONS = {
        DEATH: "eliminatedby",
        KILL: "eliminated"
    }

    let currentDeathIndex: number = 0,
        currentKillIndex: number = 0

    let splitDeathKill: {[action:string]: timer[]} = {
        [ACTIONS.DEATH]: [],
        [ACTIONS.KILL]: [] 
    }

    function findEvent(direction: 1 | 0, action: string, currentTime: number):timer {
       if (deathKillTimers) {
        splitDeathKill[ACTIONS.DEATH] = deathKillTimers[ACTIONS.DEATH]
        splitDeathKill[ACTIONS.KILL] = deathKillTimers[ACTIONS.KILL]
       }
        let timer: timer | void

        if (direction) {
            timer = splitDeathKill[action].find(
                record => {
                    return record[0] >= currentTime
                })
        } else {
            timer = [...splitDeathKill[action]].reverse().find(
                record => {
                    return record[0] < currentTime - 5
                })
        }
        if (!timer) {
            return splitDeathKill[action][!~direction? 0: splitDeathKill[action].length -1]
        }
        return timer
    }
    function move(direction: 1 | 0, action: string): void {
        if (!videoHandler) {
            return
        }
       
        videoHandler.seek((findEvent(direction, action, videoHandler.getCurrentTime()))[0])
    }

    return (
        <div className="death_kill">
            <div className="death_kill__back">
                <button className={`death_kill__back__death${currentDeathIndex === 0?' disabled':''}`} onClick={()=> move(0, ACTIONS.DEATH)}>
                    <svg x="0px" y="0px" viewBox="0 0 512 512" >
                        <title>previous death</title>
                        <path d="M256,0C114.6,0,0,100.3,0,224c0,70.1,36.9,132.6,94.5,173.7c9.6,6.9,15.2,18.1,13.5,29.9l-9.4,66.2
                        c-1.4,9.6,6,18.2,15.7,18.2H192v-56c0-4.4,3.6-8,8-8h16c4.4,0,8,3.6,8,8v56h64v-56c0-4.4,3.6-8,8-8h16c4.4,0,8,3.6,8,8v56h77.7
                        c9.7,0,17.1-8.6,15.7-18.2l-9.4-66.2c-1.7-11.7,3.8-23,13.5-29.9C475.1,356.6,512,294.1,512,224C512,100.3,397.4,0,256,0z M234,312
                        c-35.3,0-64-28.7-64-64s28.7-64,64-64s64,28.7,64,64S269.3,312,234,312z M406,317c-35.3,0-64-28.7-64-64s28.7-64,64-64
                        s64,28.7,64,64S441.3,317,406,317z"/>
                    </svg>
                </button>
                <button className={`death_kill__back__kill${currentKillIndex === 0 ? ' disabled' : ''}`}  onClick={()=> move(0, ACTIONS.KILL)}>
                    <svg viewBox="0 0 141 29">
                        <title>previous kill</title>
                        <path d="M2,12h5l16,2c2.3-4,5.8-7.1,10-9c2.3-0.3,4.7-0.6,7-1c2-0.3,4-0.6,6-1l85,1c0-1.1,0.4-2.1,1-3c0.3-0.4,0.6-0.7,1-1l1.3,1.1
                            l0.4,2.7l6.3-0.3v1.1l-1.5,0.4L141,6c0,0,0,4.9,0,6c-0.2,0.5,0,2.9,0,4c-1.9-0.3-42.1,0.8-44,0v3c1.3,0,2.5,0.8,3,2
                            c0.2,0.6,0.2,1.4,0,2c-0.3,0.4-0.6,0.7-1,1c-0.6,0.5-1.3,0.8-2,1h-4c-1.1-0.1-2.2,0.2-3,1c-0.5,0.5-0.9,1.2-1,2h-5l-6-3l-8-2H55
                            l-3-3h-7l-4-1c-0.9-0.6-2.1-0.6-3,0c-0.6,0.5-1,1.2-1,2v2c-0.4,2.1-4.1,3.3-6.6,2.5C30,25.2,29.3,24.4,29,24c-0.6-0.9-1-1.9-1-3
                            c-1.5,0.7-2.9,1.7-4,3c-0.8,0.9-1.5,1.9-2,3c-0.6,0.3-1.4,0.3-2,0c-0.6-0.4-0.5-1.4-1-2c-0.5-0.6-0.9-0.9-1.6-0.9l-1.9-0.3
                            C13.7,24.9,6.3,27.2,6,28l0,0H2l-2-2L2,12z"/>
                    </svg>
                </button>
            </div>
            <div className="death_kill__next">
                <button className="death_kill__next__death" onClick={()=> move(1, ACTIONS.DEATH)} disabled={currentDeathIndex === splitDeathKill[ACTIONS.DEATH].length - 1}>
                    <svg x="0px" y="0px" viewBox="0 0 512 512" >
                        <title>next death</title>
                        <path d="M256,0C114.6,0,0,100.3,0,224c0,70.1,36.9,132.6,94.5,173.7c9.6,6.9,15.2,18.1,13.5,29.9l-9.4,66.2
                        c-1.4,9.6,6,18.2,15.7,18.2H192v-56c0-4.4,3.6-8,8-8h16c4.4,0,8,3.6,8,8v56h64v-56c0-4.4,3.6-8,8-8h16c4.4,0,8,3.6,8,8v56h77.7
                        c9.7,0,17.1-8.6,15.7-18.2l-9.4-66.2c-1.7-11.7,3.8-23,13.5-29.9C475.1,356.6,512,294.1,512,224C512,100.3,397.4,0,256,0z M234,312
                        c-35.3,0-64-28.7-64-64s28.7-64,64-64s64,28.7,64,64S269.3,312,234,312z M406,317c-35.3,0-64-28.7-64-64s28.7-64,64-64
                        s64,28.7,64,64S441.3,317,406,317z"/>
                    </svg>
                </button>
                <button className="death_kill__next__kill"  onClick={()=> move(1, ACTIONS.KILL)} disabled={currentKillIndex === splitDeathKill[ACTIONS.KILL].length - 1}>
                    <svg viewBox="0 0 141 29">
                        <title>next kill</title>
                        <path d="M2,12h5l16,2c2.3-4,5.8-7.1,10-9c2.3-0.3,4.7-0.6,7-1c2-0.3,4-0.6,6-1l85,1c0-1.1,0.4-2.1,1-3c0.3-0.4,0.6-0.7,1-1l1.3,1.1
                            l0.4,2.7l6.3-0.3v1.1l-1.5,0.4L141,6c0,0,0,4.9,0,6c-0.2,0.5,0,2.9,0,4c-1.9-0.3-42.1,0.8-44,0v3c1.3,0,2.5,0.8,3,2
                            c0.2,0.6,0.2,1.4,0,2c-0.3,0.4-0.6,0.7-1,1c-0.6,0.5-1.3,0.8-2,1h-4c-1.1-0.1-2.2,0.2-3,1c-0.5,0.5-0.9,1.2-1,2h-5l-6-3l-8-2H55
                            l-3-3h-7l-4-1c-0.9-0.6-2.1-0.6-3,0c-0.6,0.5-1,1.2-1,2v2c-0.4,2.1-4.1,3.3-6.6,2.5C30,25.2,29.3,24.4,29,24c-0.6-0.9-1-1.9-1-3
                            c-1.5,0.7-2.9,1.7-4,3c-0.8,0.9-1.5,1.9-2,3c-0.6,0.3-1.4,0.3-2,0c-0.6-0.4-0.5-1.4-1-2c-0.5-0.6-0.9-0.9-1.6-0.9l-1.9-0.3
                            C13.7,24.9,6.3,27.2,6,28l0,0H2l-2-2L2,12z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default DeathKill