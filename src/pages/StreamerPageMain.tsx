import React, { useEffect, useState } from 'react'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'

//TODO: figure out proper type
const StreamerPageMain = ({ playersById, videosById, videosSorted, clipsById, clipsSorted, match }: any) => {
    const [streamer, setStreamer] = useState()
    useEffect(() => {
        setStreamer({ ...playersById[match.params.playerId] })
    }, [playersById[match.params.playerId]])
    return (
        <>
            {streamer &&
                <div className="streamer_page">
                    <div className="streamer_page__avatar">
                        <img src={`http://streamsnipers.com/static/images/streamers/${streamer.name}.png`} alt={`${streamer.name} avatar`} />
                        <h1>{streamer.name}</h1>
                    </div>
                    <h3>Recent one category</h3><Link to={`/player/${streamer.id}/${streamer.slug}/videos`}>View All ></Link>
                    <Slider classNameProp="side" mediaSorted={videosSorted} mediaById={videosById} playersById={playersById} />
                    <h3>Recent other category</h3><Link to={`/player/${streamer.id}/${streamer.slug}/clips`}>View All ></Link>
                    <Slider classNameProp="side" mediaSorted={clipsSorted} mediaById={clipsById} playersById={playersById} />
                </div>
            }
        </>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videosById: state.mainReducer.videosById,
        videosSorted: state.mainReducer.videosSorted.slice(0, 6),
        clipsSorted: state.mainReducer.clipsSorted.slice(0, 6),
        clipsById: state.mainReducer.clipsById,
        playersById: state.mainReducer.playersById
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreamerPageMain)