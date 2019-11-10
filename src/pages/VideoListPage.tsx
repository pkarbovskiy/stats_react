import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { State } from '../reducers/reducers'
import Table from '../components/Table'
import { gaEvents } from '../common_function'

const VideoListPage = ({ streamer, videosById, videosSorted, allMediaSorted, match }: any) => {
    const [mediaSorted, setMediaSorted] = useState(videosSorted)
    function error(event: any) {
        event.target.src = "//d38ev7kpu49one.cloudfront.net/static/face.svg"
    }
    useEffect(() => {
        function scroll() {
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                gaEvents({ eventCategory: 'Video List Page', eventAction: 'scroll', eventLabel: `${match.path}` })
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
        <>
            <div className="streamer_page__player">
                <div className="streamer_page__avatar">
                    <img src={`//d38ev7kpu49one.cloudfront.net/featured_streamers/${streamer.id}.png`} alt={`${streamer.name} avatar`} onError={error} />
                    <h1>{streamer.name}</h1>
                </div>
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