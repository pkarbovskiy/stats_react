import React, {useReducer, useRef} from 'react'
import AutoSkip from './AutoSkip'

type timer = number[]
type DeathKillProps = {
    deathKillTimers: any;
    videoHandler: any;
}
const ACTIONS = {
    ALL: "all",
    DEATH: "eliminatedby",
    KILL: "eliminated",
}
const buttonsReducer = (state:any, action:any) => {
    const newState = Object.assign({}, state) 
    switch (action.type) {
        case 'INCREMENT':
            if (newState.timers[ACTIONS.KILL].length > 0) {
                newState.isKillNextDisabled = newState.timers[ACTIONS.KILL][newState.timers[ACTIONS.KILL].length - 1][0] < action.item.currentTime
                newState.isKillPrevDisabled = false
            }
           
            return newState
        case 'DECREMENT':        
            if (newState.timers[ACTIONS.KILL].length > 0) {
                newState.isKillPrevDisabled = newState.timers[ACTIONS.KILL][0][0] + 5 > action.item.currentTime
                newState.isKillNextDisabled = false
            }
            
            return newState
    }
}

const DeathKill = ({deathKillTimers, videoHandler}: DeathKillProps) => {
    const currentAction = useRef(ACTIONS.ALL)
    const initialState = {
        isPrevReactionDisabled: false,
        isDeathReactionDisabled: false,
        timers:deathKillTimers
    }
    const [state, dispatch] = useReducer(buttonsReducer, initialState);
    
    let splitDeathKill: {[action:string]: timer[]} = {
        [ACTIONS.DEATH]: [],
        [ACTIONS.KILL]: [] 
    }

    function findEvent(direction: 1 | 0, action: string, currentTime: number):timer | null {
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
            return null
        }
        return timer
    }

    function move(direction: 1 | 0, action: string): void {
        if (!videoHandler) {
            return
        }
        const item = {
            currentTime: videoHandler.getCurrentTime()
        }
        dispatch({type: (direction? 'INCREMENT' : 'DECREMENT'), item})
        const timer = findEvent(direction, action, videoHandler.getCurrentTime())
        if (timer) {
            videoHandler.seek(timer[0])
        }
    }
    
    return (
        <nav className="video__nav">
            <aside className="video__nav--left">
                <div className="video__nav__container">
                    <button className={`video__nav__container--btn${state.isDeathPrevDisabled ? ' disabled' : ''}`}  onClick={()=> move(0, currentAction.current)} disabled={state.isDeathPrevDisabled}>
                        <svg viewBox="0 0 512 512">
                            <path d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200
                                    200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0
                                    10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z">
                            </path>
                        </svg>
                    </button>
                    <label className="video__nav__container--lbl">
                        Prev. Event
                    </label>
                </div>
                <div className="video__nav__container">
                    <button className={`video__nav__container--btn${state.isDeathPrevDisabled ? ' disabled' : ''}`}  onClick={()=> move(0, ACTIONS.DEATH)} disabled={state.isDeathPrevDisabled}>
                    <svg viewBox="0 0 448 512">
                        <title>Rewine 10 seconds back</title>
                        <path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0
                            33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192
                            34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7
                            103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z">
                        </path>
                    </svg>
                    <span>-10</span>
                    </button>
                    <label className="video__nav__container--lbl">
                        -10 SEC
                    </label>
                </div>
            </aside>
            <div className="video__nav--middle">
                <AutoSkip videoHandler={videoHandler} deathKillTimers={deathKillTimers} />
                <div className="video__nav__container">
                    <button className={`video__nav__container--btn${state.isDeathPrevDisabled ? ' disabled' : ''}`}  onClick={()=> {currentAction.current = ACTIONS.ALL}} disabled={state.isDeathPrevDisabled}>
                        All
                    </button>
                </div>
                <div className="video__nav__container">
                    <button className={`video__nav__container--btn${state.isDeathPrevDisabled ? ' disabled' : ''}`}  onClick={()=> {currentAction.current = ACTIONS.KILL}} disabled={state.isDeathPrevDisabled}>
                    <svg viewBox="0 0 512 512">
                        <title>Eliminated</title>
                        <path d="M500 224h-30.364C455.724 130.325 381.675 56.276 288 42.364V12c0-6.627-5.373-12-12-12h-40c-6.627
                            0-12 5.373-12 12v30.364C130.325 56.276 56.276 130.325 42.364 224H12c-6.627 0-12 5.373-12 12v40c0 6.627 5.373
                            12 12 12h30.364C56.276 381.675 130.325 455.724 224 469.636V500c0 6.627 5.373 12 12 12h40c6.627 0
                            12-5.373 12-12v-30.364C381.675 455.724 455.724 381.675 469.636 288H500c6.627 0
                            12-5.373 12-12v-40c0-6.627-5.373-12-12-12zM288 404.634V364c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12
                            12v40.634C165.826 392.232 119.783 346.243 107.366 288H148c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40.634C119.768
                            165.826 165.757 119.783 224 107.366V148c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40.634C346.174 119.768 392.217
                            165.757 404.634 224H364c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40.634C392.232 346.174 346.243 392.217 288
                            404.634zM288 256c0 17.673-14.327 32-32 32s-32-14.327-32-32c0-17.673 14.327-32 32-32s32 14.327 32 32z">
                        </path>
                    </svg>
                    </button>
                    <label className="video__nav__container--lbl">
                        Elim.
                    </label>
                </div>
                <div className="video__nav__container">
                    <button className={`video__nav__container--btn${state.isDeathPrevDisabled ? ' disabled' : ''}`}  onClick={()=> {currentAction.current = ACTIONS.DEATH}} disabled={state.isDeathPrevDisabled}>
                        <svg role="img" viewBox="0 0 448 512">
                            <title>Eliminated By</title>
                            <path d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432
                                264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47
                                7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11
                                13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9
                                3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48
                                25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41
                                70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32
                                14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35
                                32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z">
                            </path>
                        </svg>
                    </button>
                    <label className="video__nav__container-lbl">
                        Elim. By
                    </label>
                </div>
                <div className="video__nav__container">
                    <button className={`video__nav__container--btn${state.isDeathPrevDisabled ? ' disabled' : ''}`}  onClick={()=> move(0, ACTIONS.DEATH)} disabled={state.isDeathPrevDisabled}>
                        <svg viewBox="0 0 512 512">
                            <title>Victory</title>
                            <path d="M243.2 189.9V258c26.1 5.9 49.3 15.6 73.6 22.3v-68.2c-26-5.8-49.4-15.5-73.6-22.2zm223.3-123c-34.3 15.9-76.5 31.9-117 31.9C296 98.8 251.7 
                                64 184.3 64c-25 0-47.3 4.4-68 12 2.8-7.3 4.1-15.2 3.6-23.6C118.1 24 94.8 1.2 66.3 0 34.3-1.3 8 24.3 8 56c0 19 9.5 35.8 24 45.9V488c0 13.3 10.7
                                24 24 24h16c13.3 0 24-10.7 24-24v-94.4c28.3-12.1 63.6-22.1 114.4-22.1 53.6 0 97.8 34.8 165.2 34.8 48.2 0 86.7-16.3 122.5-40.9 8.7-6 13.8-15.8
                                13.8-26.4V95.9c.1-23.3-24.2-38.8-45.4-29zM169.6 325.5c-25.8 2.7-50 8.2-73.6 16.6v-70.5c26.2-9.3 47.5-15 73.6-17.4zM464 191c-23.6 9.8-46.3
                                19.5-73.6 23.9V286c24.8-3.4 51.4-11.8 73.6-26v70.5c-25.1 16.1-48.5 24.7-73.6 27.1V286c-27 3.7-47.9
                                1.5-73.6-5.6v67.4c-23.9-7.4-47.3-16.7-73.6-21.3V258c-19.7-4.4-40.8-6.8-73.6-3.8v-70c-22.4 3.1-44.6 10.2-73.6 20.9v-70.5c33.2-12.2
                                50.1-19.8 73.6-22v71.6c27-3.7 48.4-1.3 73.6 5.7v-67.4c23.7 7.4 47.2 16.7 73.6 21.3v68.4c23.7 5.3 47.6 6.9 73.6 2.7V143c27-4.8 52.3-13.6 73.6-22.5z">
                            </path>
                        </svg>
                    </button>
                    <label className="video__nav__container--lbl">
                        Victory
                    </label>
                </div>
                
            </div>
            <aside className="video__nav--right">
                <div className="video__nav__container">
                    <button className={`video__nav__container--btn${state.isKillNextDisabled ? ' disabled' : ''}`}   onClick={()=> move(1, ACTIONS.KILL)} disabled={state.isKillNextDisabled}>
                        <span>+10</span>
                        <svg viewBox="0 0 448 512">
                            <title>Skip 10 seconds forward</title>
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3
                            103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4
                            96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z">
                            </path>
                        </svg>
                    </button>
                    <label className="video__nav__container--lbl">
                        +10 SEC
                    </label>
                </div>                
                <div className="video__nav__container">
                    <button className={`video__nav__container--btn${state.isKillNextDisabled ? ' disabled' : ''}`}   onClick={()=> move(1, currentAction.current)} disabled={state.isKillNextDisabled}>
                        <svg aria-hidden="true" focusable="false" role="img"  viewBox="0 0 512 512">
                            <title>Next Event</title>
                            <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5
                                    8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z">
                            </path>
                        </svg>
                    </button>
                    <label className="video__nav__container--lbl">
                        Next Event
                    </label>
                </div>
            </aside>
        </nav>
    )
}

export default DeathKill