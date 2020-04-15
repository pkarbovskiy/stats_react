import React, { useEffect, useState } from 'react'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { Route, NavLink } from 'react-router-dom'
import StreamerPageMain from './StreamerPageMain'
import VideoListPage from './VideoListPage'
import ClipListPage from './ClipListPage'
import Avatar from '../components/Avatar'
import {
    addVideosById,
    addClipsById,
    addVideosSorted,
    addClipsSorted,
    setCurrentPlayer
} from '../actions'
import Loader from '../components/Loader'
import url from '../constants'

//TODO: figure out proper type
const StreamerPage = ({ match, onData }: any) => {
    const [streamer, setStreamer] = useState({} as any)
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
    }, [match.params.playerId])
    return (
        <div className="streamer_page">
            {!streamer && <Loader />}
            {streamer &&
                <>
                    <nav className="streamer_page__nav">
                        <NavLink exact to={`/player/${streamer.id}/${streamer.slug}`} activeClassName={"active"} className="streamer_page__nav--link">Home<div></div></NavLink>
                        {streamer.streamer > 0 &&
                            <NavLink to={`/player/${streamer.id}/${streamer.slug}/videos`} className="streamer_page__nav--link">Videos<div></div></NavLink>
                        }
                        <NavLink to={`/player/${streamer.id}/${streamer.slug}/clips`} className="streamer_page__nav--link">Reactions<div></div></NavLink>
                    </nav>
                    <div className="streamer_page__player">
                        <div className="streamer_page__avatar">
                            <Avatar player={streamer} />
                            <h1>{streamer.name}</h1>
                        </div>
                        <Route exact path={match.path} component={StreamerPageMain} />
                        <Route path={`${match.path}/clips`} component={ClipListPage} />
                        {streamer.streamer > 0 &&
                            <Route path={`${match.path}/videos`} component={VideoListPage} />
                        }
                    </div>
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