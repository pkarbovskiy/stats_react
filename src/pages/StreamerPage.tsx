import React, { useEffect, useState } from 'react'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import StreamerPageMain from './StreamerPageMain'
import VideoListPage from './VideoListPage'
import ClipListPage from './ClipListPage'
import {
    addVideosById,
    addClipsById,
    addVideosSorted,
    addClipsSorted,
    addPlayersById
} from '../actions'
//TODO: figure out proper type
const StreamerPage = ({ playersById, match, onData }: any) => {
    const [streamer, setStreamer] = useState()
    useEffect(() => {
        fetch(`http://192.168.232.129:8000/api/player/${match.params.playerId}`)
            .then(data => data.json())
            .then(data => {
                onData(data)
                setStreamer(data.videosById[data.videosSorted[0]].streamer)
            })

    }, [match.params.playerId])
    return (
        <div className="streamer_page">
            {!streamer && <span>LOOOOOAAAADDDDIIIIINNNNGGGGG....</span>}
            {streamer &&
                <>
                    <div>
                        <Link to={`/player/${streamer.id}/${streamer.slug}`}>Home</Link>
                        <Link to={`/player/${streamer.id}/${streamer.slug}/videos`}>Videos</Link>
                        <Link to={`/player/${streamer.id}/${streamer.slug}/clips`}>Clips</Link>
                    </div>
                    <Route exact path={match.path} component={StreamerPageMain} />
                    <Route path={`${match.path}/clips`} component={ClipListPage} />
                    <Route path={`${match.path}/videos`} component={VideoListPage} />
                </>
            }
        </div>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        playersById: state.mainReducer.playersById
    }
}
const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onData: (data: any) => {
            if (data.videosById) {
                dispatch(addVideosById(data.videosById))
            }
            if (data.clipsById) {
                dispatch(addClipsById(data.clipsById))
            }
            if (data.clipsSorted) {
                dispatch(addClipsSorted(data.clipsSorted))
            }
            if (data.videosSorted) {
                dispatch(addVideosSorted(data.videosSorted))
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreamerPage)