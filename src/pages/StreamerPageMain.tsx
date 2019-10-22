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
                <div className="streamer_page__player">
                    <div className="streamer_page__avatar">
                        <img src={`//d38ev7kpu49one.cloudfront.net/featured_streamers/${player.id}.png`} alt={`${player.name} avatar`} />
                        <h1>{player.name}</h1>
                    </div>
                    {videosSorted.length > 0 &&
                        <>
                            <div className="streamer_page__category">
                                <h3>Recent Broadcats  <span className="streamer_page__category--direction">-></span></h3>
                                <Link to={`/player/${player.id}/${player.slug}/videos`}>View All Videos></Link>
                            </div>
                            <Slider classNameProp={['side', 'horisontal']} mediaSorted={videosSorted} mediaById={videosById} />
                        </>
                    }
                    <div className="streamer_page__category">
                        <h3>Recent Highlights  <span className="streamer_page__category--direction">-></span></h3>
                        <Link to={`/player/${player.id}/${player.slug}/clips`}>View All Clips ></Link>
                    </div>
                    <Slider classNameProp={['side', 'horisontal']} mediaSorted={clipsSorted} mediaById={clipsById} />
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