import React from 'react'
import { connect } from 'react-redux'
import { addVideosById } from '../actions'
import { videosByDate } from '../selectors'
import { State } from '../reducers/reducers'
import Table from '../components/Table'

const VideoListPage = ({ videosById, videosSorted, match }: any) => {
    return (
        <div className="video_list__page">
            <h2>Title</h2>
            <Table classNameProp="side" mediaSorted={videosSorted} mediaById={videosById} />
        </div>
    );
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videosById: state.mainReducer.videosById,
        videosSorted: state.mainReducer.videosSorted.slice(0, 30)
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onDelete: (id: any) => {
            dispatch(addVideosById(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoListPage)