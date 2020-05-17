import React, { useReducer, useState } from 'react'
import VideoFilters from './VideoFilters'

type timer = number[]
type DeathKillProps = {
    deathKillTimers: any;
    videoHandler: any;
}
const actionsOrder = ["all", "eliminatedby", "eliminated", "victory"]
const ACTIONS = {
    ALL: "all",
    DEATH: "eliminatedby",
    KILL: "eliminated",
    VICTORY: "victory"
}
const buttonsReducer = (state: any, action: any) => {
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

const DeathKill = ({ deathKillTimers, videoHandler }: DeathKillProps) => {

    const [currentAction, setNextAction] = useState<string>(ACTIONS.ALL)
    const initialState = {
        isPrevReactionDisabled: false,
        isDeathReactionDisabled: false,
        timers: (deathKillTimers || {}).splitEvents
    }
    const [state, dispatch] = useReducer(buttonsReducer, initialState)

    let splitDeathKill: { [action: string]: timer[] } = {
        [ACTIONS.DEATH]: [],
        [ACTIONS.KILL]: [],
        [ACTIONS.ALL]: [],
        [ACTIONS.VICTORY]: []
    }

    function findEvent(direction: 1 | 0, action: string, currentTime: number): timer | null {
        if (deathKillTimers?.splitEvents) {
            splitDeathKill[ACTIONS.DEATH] = deathKillTimers.splitEvents[ACTIONS.DEATH]
            splitDeathKill[ACTIONS.KILL] = deathKillTimers.splitEvents[ACTIONS.KILL]
            splitDeathKill[ACTIONS.ALL] = deathKillTimers.splitEvents[ACTIONS.ALL]
            splitDeathKill[ACTIONS.VICTORY] = deathKillTimers.splitEvents[ACTIONS.VICTORY]
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

    function move(direction: 1 | 0, action: string, timing = 0): void {
        if (!videoHandler) {
            return
        }
        const item = {
            currentTime: videoHandler.getCurrentTime()
        }
        if (timing !== 0) {
            videoHandler.seek(videoHandler.getCurrentTime() + timing)
            return
        }
        dispatch({ type: (direction ? 'INCREMENT' : 'DECREMENT'), item })
        const timer = findEvent(direction, action, videoHandler.getCurrentTime())
        if (timer) {
            videoHandler.seek(timer[0])
        }
    }
    function goToNextAction() {
        const index = actionsOrder.indexOf(currentAction) + 1
        if (index >= actionsOrder.length) {
            return setNextAction(actionsOrder[0])

        }
        setNextAction(actionsOrder[index])
    }
    return (
        <nav className="flex flex-row w-full mt-6 sm:flex-col sm:ml-2 sm:w-56 sm:mt-0">
            <button className={`bg-indigo-500 hover:bg-indigo-800 h-16 flex justify-center items-center mr-2 font-bold text-lg sm:h-full w-full text-white rounded-lg ${state.isDeathPrevDisabled ? ' disabled' : ''} `} onClick={() => move(0, currentAction)} disabled={state.isDeathPrevDisabled}>
                <svg className="w-4 h-4" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16.7394L9.70111 19L-2.07629e-06 9.5L9.70111 -5.02438e-07L12 2.26057L4.60731 9.5L12 16.7394Z"
                        fill="white" />
                </svg>
                <label className="hidden ml-2 sm:block">
                    Previous
                </label>
            </button>
            <button className="relative w-2 h-16 sm:h-5 sm:w-full" onClick={() => goToNextAction()} >
                <VideoFilters action={currentAction} />
            </button>
            <button className={`bg-indigo-500 hover:bg-indigo-800 h-16 flex justify-center items-center font-bold text-lg sm:h-full w-full text-white rounded-lg ${state.isKillNextDisabled ? ' disabled' : ''} `} onClick={() => move(1, currentAction)} disabled={state.isKillNextDisabled}>
                <label className="hidden mr-2 sm:block">
                    Next
                </label>
                <svg className="w-4 h-4" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.99616e-07 2.26057L2.29889 2.7414e-08L12 9.5L2.29889 19L2.6957e-08 16.7394L7.39269 9.5L1.99616e-07 2.26057Z" fill="white" />
                </svg>
            </button>
        </nav>
    )
}

export default DeathKill