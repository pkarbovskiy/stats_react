import React from 'react'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import StreamerPageMain from './StreamerPageMain'
import VideoListPage from './VideoListPage'
//TODO: figure out proper type
const StreamerPage = ({ streamer, videos, match }: any) => {
    return (
        <div className="streamer_page">
            <div>
                <Link to={`/player/${streamer.id}/${match.params.slug}`}>Main</Link>
                <Link to={`/player/${streamer.id}/${match.params.slug}/videos`}>Videos</Link>
                <Link to={`/player/${streamer.id}/${match.params.slug}/clips`}>Clips</Link>
            </div>
            <Route exact path={match.path} component={StreamerPageMain} />
            <Route path={`${match.path}/clips`} component={VideoListPage} />
            <Route path={`${match.path}/videos`} component={VideoListPage} />
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