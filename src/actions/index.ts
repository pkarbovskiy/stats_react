import { createActions } from 'redux-actions'

export const {
    addVideosById,
    addClipsById,
    addVideosSorted,
    addClipsSorted,
    addPlayersById,
    setCurrentPlayer,
    addStreamersById
} = createActions({
    ADD_VIDEOS_BY_ID: (objects: any) => objects,
    ADD_CLIPS_BY_ID: (objects: any) => objects,
    ADD_VIDEOS_SORTED: (objects: any) => objects,
    ADD_CLIPS_SORTED: (objects: any) => objects,
    ADD_PLAYERS_BY_ID: (objects: any) => objects,
    SET_CURRENT_PLAYER: (objects: any) => objects,
    ADD_STREAMERS_BY_ID: (objects: any) => objects
})