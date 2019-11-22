import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { State } from '../reducers/reducers'
import Table from '../components/Table'
import { gaEvents, shouldLazyLoad } from '../common_function'

const VideoListPage = ({ streamer, videosById, videosSorted, allMediaSorted, match }: any) => {
    const [mediaSorted, setMediaSorted] = useState(videosSorted)
    useEffect(() => {
        function scroll() {
            if (shouldLazyLoad()) {
                setMediaSorted((state: any) => state.concat(allMediaSorted.slice(state.length - 1, state.length + 10)))
            }
        }
        window.addEventListener('scroll', scroll)

        return () => { window.removeEventListener('scroll', scroll) }
    }, [])
    return (
        <>
            <div className="streamer_page__player">
                <Table classNameProp="side" mediaSorted={mediaSorted} mediaById={videosById} />
            </div>
        </>
    );
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videosById: state.mainReducer.videosById,
        videosSorted: state.mainReducer.videosSorted.slice(0, 30),
        allMediaSorted: state.mainReducer.videosSorted,
        streamer: state.mainReducer.currentPlayer
    }
}

export default connect(
    mapStateToProps,
    {}
)(VideoListPage)