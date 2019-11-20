import { createSelector } from 'reselect'
import { videoCartProps } from '../components/VideoCart'
// TODO: set proper type
const videos = (state: any) => state.mainReducer.videos

export const videosByDate = createSelector(
    [videos],
    videos => videos.sort((a: videoCartProps, b: videoCartProps) => a.streamStart - b.streamStart)
)
