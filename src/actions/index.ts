import { createActions } from 'redux-actions'

export const {
    addVideosById,
    addClipsById,
    addVideosSorted,
    addClipsSorted,
    addPlayersById,
    setCurrentPlayer,
    addStreamersById,
    addMedia,
    setCurrentSearch
} = createActions({
    ADD_VIDEOS_BY_ID: (data: any) => data,
    ADD_CLIPS_BY_ID: (data: any) => data,
    ADD_VIDEOS_SORTED: (data: any) => data,
    ADD_CLIPS_SORTED: (data: any) => data,
    ADD_PLAYERS_BY_ID: (data: any) => data,
    SET_CURRENT_PLAYER: (data: any) => data,
    ADD_STREAMERS_BY_ID: (data: any) => data,
    ADD_MEDIA: (data: { data: any, since: number }, category: string) => Object.assign({}, data, { category }),
    SET_CURRENT_SEARCH: (data: any, query: string) => ({ data, query })
})