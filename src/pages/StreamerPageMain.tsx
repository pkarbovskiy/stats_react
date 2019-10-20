import React, { useEffect, useState } from 'react'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'

//TODO: figure out proper type
const StreamerPageMain = ({ player, videosById, videosSorted, clipsById, clipsSorted }: any) => {

    return (
        <>
            {player &&
                <div className="streamer_page">
                    <h1>
                    <div className="streamer_page__avatar">
                        <img src={`http://streamsnipers.com/static/images/streamers/${player.name}.png`} alt={`${player.name} avatar`} />
                        {player.name}
                    </div>
                    </h1>
                    {videosSorted.length > 0 &&
                        <>
                            <h3>
                                Recent broadcasts
                                <a className="small_link" href={`/player/${player.id}/${player.slug}/videos`}>view all</a>
                                </h3>
                            <Slider classNameProp="side" mediaSorted={videosSorted} mediaById={videosById} />
                        </>
                    }
                    <h3>
                        Recent reactions
                        <a className="small_link" href={`/player/${player.id}/${player.slug}/clips`}>view all</a>
                    </h3>
                    <Slider classNameProp="side" mediaSorted={clipsSorted} mediaById={clipsById} />
                </div>
            }
        </>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videosById: state.mainReducer.videosById,
        videosSorted: state.mainReducer.videosSorted.slice(0, 5),
        clipsSorted: state.mainReducer.clipsSorted.slice(0, 5),
        clipsById: state.mainReducer.clipsById,
        player: state.mainReducer.currentPlayer
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreamerPageMain)