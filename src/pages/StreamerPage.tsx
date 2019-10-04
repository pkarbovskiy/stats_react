import React from 'react'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import StreamerPageMain from './StreamerPageMain'
import VideoListPage from './VideoListPage'
//TODO: figure out proper type
const StreamerPage = ({ streamer, videos, match }: any) => {
    return (
        <div className="streamer_page">
            <Route exact path="/:slug" component={StreamerPageMain} />
            <Route path="/:slug/clips" component={VideoListPage} />
            <Route path="/:slug/videos" component={VideoListPage} />
        </div>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videos: state.mainReducer.videos,
        streamer: state.mainReducer.streamers[0].streamer
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreamerPage)