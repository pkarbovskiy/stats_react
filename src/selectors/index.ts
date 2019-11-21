import { createSelector } from 'reselect'
import { videoCartProps } from '../components/VideoCart'
// TODO: set proper type
const videos = (state: any) => state.mainReducer.videos
const clipsById = (state: any) => state.mainReducer.clipsById
const clipsSorted = (state: any) => state.mainReducer.clipsSorted

export const videosByDate = createSelector(
    [videos],
    videos => videos.sort((a: videoCartProps, b: videoCartProps) => a.streamStart - b.streamStart)
)

export const mediaByAction = createSelector(
    [clipsSorted, clipsById],
    (clipsSorted, clipsById) => clipsSorted.reduce((acc:{[action:string]: number[]}, id: number) => {
        if (!acc[clipsById[id].action]) {
            acc[clipsById[id].action] = []
        }
        acc[clipsById[id].action].push(id)
        acc.all.push(id)
        return acc
    },{all:[]})
)
