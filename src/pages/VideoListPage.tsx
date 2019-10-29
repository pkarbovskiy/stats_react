import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { State } from '../reducers/reducers'
import Table from '../components/Table'

const VideoListPage = ({ videosById, videosSorted, allMediaSorted, match }: any) => {
    const [mediaSorted, setMediaSorted] = useState(videosSorted)
    useEffect(() => {
        function scroll() {
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                setMediaSorted((state: any) => state.concat(allMediaSorted.slice(state.length - 1, state.length + 10)))
            }

            if (allMediaSorted.length === mediaSorted.lednth) {
                window.removeEventListener('scroll', scroll)
            }
        }
        window.addEventListener('scroll', scroll)

        return () => { window.removeEventListener('scroll', scroll) }
    }, [])
    return (
        <div className="video_list__page">
            <Table classNameProp="side" mediaSorted={mediaSorted} mediaById={videosById} />
        </div>
    );
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videosById: state.mainReducer.videosById,
        videosSorted: state.mainReducer.videosSorted.slice(0, 30),
        allMediaSorted: state.mainReducer.videosSorted
    }
}

export default connect(
    mapStateToProps,
    {}
)(VideoListPage)