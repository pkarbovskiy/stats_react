import {createSelector} from 'reselect'
// TODO: set proper type
const videos = (state: any) => state.videos

export const videosByDate = createSelector(
  [videos], 
  videos => videos.sort((a, b) => a.streamStart - b.streamStart)
)