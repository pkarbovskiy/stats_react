import { handleActions } from 'redux-actions'
import {
    addVideosById,
    addClipsById,
    addVideosSorted,
    addClipsSorted,
    addPlayersById,
    addStreamersById,
    setCurrentPlayer,
    setCurrentSearch
} from '../actions'
const DEFAULT_STATE = {
    deathKillTimers: [],
    timeline: {},
    twitchPlayer: {},
    currentPlayer: {},
    streamersById: {},
    videos: [],
    featuredStreamers: [
        3429,
        3406,
        3337,
        10654,
        3485,
        5010,
        3372,
        3476,
        3603,
        3150,
        3426,
        3524,
        3316,
        3473,
        3365,
        3306,
        3591,
        8370,
        3510
    ],
    playersById: {},
    videosById: {},
    clipsById: {},
    videosSorted: [],
    clipsSorted: [],
    search: {} as {[key:string]:any}
}
export type State = typeof DEFAULT_STATE

const addVideosByIdReducer = (state: State, addVideos: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.videosById = addVideos.payload
    return newState
}

const addClipsByIdReducer = (state: State, addClips: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.clipsById = addClips.payload
    return newState
}

const addVideosSortedReducer = (state: State, addVideosSorted: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.videosSorted = addVideosSorted.payload
    return newState
}

const addClipsSortedReducer = (state: State, addClipsSorted: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.clipsSorted = addClipsSorted.payload
    return newState
}

const addPlayersByIdReducer = (state: State, addPlayersById: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.playersById = addPlayersById.payload
    return newState
}

const addStreamersByIdReducer = (state: State, addStreamersById: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.streamersById = addStreamersById.payload
    return newState
}

const setCurrentPlayerReducer = (state: State, currentPlayer: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.currentPlayer = currentPlayer.payload
    return newState
}

const setCurrentSearchReducer = (state: State, action: { payload: any }): State => {
    const newState = Object.assign({}, state)
    newState.search[action.payload.query] = action.payload.data
    return newState
}
export const mainReducer = handleActions({
    [addVideosById as any]: addVideosByIdReducer,
    [addClipsById as any]: addClipsByIdReducer,
    [addVideosSorted as any]: addVideosSortedReducer,
    [addClipsSorted as any]: addClipsSortedReducer,
    [addPlayersById as any]: addPlayersByIdReducer,
    [setCurrentPlayer as any]: setCurrentPlayerReducer,
    [addStreamersById as any]: addStreamersByIdReducer,
    [setCurrentSearch as any]: setCurrentSearchReducer
},
    DEFAULT_STATE
)