import React from 'react'
import { connect } from 'react-redux'
import { addVideosById } from '../actions'
import { videosByDate } from '../selectors'
import { State } from '../reducers/reducers'
import Table from '../components/Table'

const VideoListPage = ({ playersById, clipsById, clipsSorted, match }: any) => {
    return (
        <div className="video_list__page">
            <h2>Title</h2>
            <Table classNameProp="side" mediaSorted={clipsSorted} mediaById={clipsById} playersById={playersById} />
        </div>
    );
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        clipsSorted: state.mainReducer.clipsSorted.slice(0, 30),
        clipsById: state.mainReducer.clipsById,
        playersById: state.mainReducer.playersById
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