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
    setCurrentPlayer
} from '../actions'
import url from '../constants'
//TODO: figure out proper type
const StreamerPage = ({ match, onData }: any) => {
    const [streamer, setStreamer] = useState()
    useEffect(() => {
        function getPlayer(playerId: number) {
            fetch(`${url}/api/player/${playerId | 0}`)
                .then(data => data.json())
                .then(data => {
                    onData(data)
                    setStreamer(data.player)
                })
        }
        setStreamer(false)
        if (match.path === '/random_streamer') {
            fetch(`${url}/api/player/random`)
                .then(data => data.json())
                .then(data => {
                    getPlayer(data.streamer_id)
                })
        } else {
            getPlayer(match.params.playerId | 0)
        }


    }, [])
    return (
        <div className="streamer_page">
            {!streamer && <span>LOOOOOAAAADDDDIIIIINNNNGGGGG....</span>}
            {streamer &&
                <>
                    <div>
                        <Link to={`/player/${streamer.id}/${streamer.slug}`}>Home</Link>
                        {streamer.streamer &&
                            <Link to={`/player/${streamer.id}/${streamer.slug}/videos`}>Videos</Link>
                        }
                        <Link to={`/player/${streamer.id}/${streamer.slug}/clips`}>Clips</Link>
                    </div>
                    <Route exact path={match.path} component={StreamerPageMain} />
                    <Route path={`${match.path}/clips`} component={ClipListPage} />
                    {streamer.streamerd &&
                        <Route path={`${match.path}/videos`} component={VideoListPage} />
                    }
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
            if (data.player) {
                dispatch(setCurrentPlayer(data.player))
            }
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreamerPage)