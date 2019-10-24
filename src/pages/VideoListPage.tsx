import React from 'react'
import { connect } from 'react-redux'
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

export default connect(
    mapStateToProps,
    {}
)(VideoListPage)