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
                    <div className="streamer_page__avatar">
                        <img src={`//d38ev7kpu49one.cloudfront.net/featured_streamers/${player.id}.png`} alt={`${player.name} avatar`} />
                        <h1>{player.name}</h1>
                    </div>
                    <h1>{player.name}</h1>

                    {videosSorted.length > 0 &&
                        <>
                            <h3>
                                Recent broadcasts
                                <Link to={`/player/${player.id}/${player.slug}/videos`} className="small_link">view all</Link>
                                </h3>
                            <Slider classNameProp="side" mediaSorted={videosSorted} mediaById={videosById} />
                        </>
                    }
                    <h3>
                        Recent reactions
                        <Link to={`/player/${player.id}/${player.slug}/clips`} className="small_link">view all</Link>
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