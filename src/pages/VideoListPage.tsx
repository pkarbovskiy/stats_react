import React from 'react'
import { connect } from 'react-redux'
import { action } from '../actions'
import { videosByDate } from '../selectors'
import { State } from '../reducers/reducers'
import Table from '../components/Table'

const VideoListPage: React.FC<{ videosByDate: any, streamers: any }> = ({
    videosByDate
}) => {
    return (
        <div className="video_list__page">
            <h2>Title</h2>
            <Table classNameProp="side" videos={videosByDate} />
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
)(VideoListPage)