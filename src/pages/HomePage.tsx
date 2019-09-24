import React from 'react'
import { connect } from 'react-redux'
import StreamerVideos from '../components/StreamerVideos'
import '../styles/App.scss'
import { action } from '../actions'
import { videosByDate } from '../selectors'
import { State } from '../reducers/reducers'


const HomePage: React.FC<{ videosByDate: any, streamers: any }> = ({
    videosByDate,
    streamers
}) => {
    return (
        <div className="home__page">
            {streamers.map((streamer: any) => (<StreamerVideos {...streamer} />))}
        </div>
    );
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videosByDate: videosByDate(state),
        streamers: state.mainReducer.streamers
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onDelete: (id: any) => {
            dispatch(action(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)
