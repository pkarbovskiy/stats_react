import React, { useState } from 'react'
import TwitchPlayer from '../components/TwitchPlayer'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import Table from '../components/Table'

const VideoPage = ({ twitchPlayer, videos, deathKillTimers }: { videos: any; twitchPlayer: any; deathKillTimers: any[] }) => {
    return (
        <div className="video_page">
            <TwitchPlayer {...twitchPlayer} deathKillTimers={deathKillTimers} />
            <h3>Other broacats</h3>
            <Table classNameProp="side" videos={videos} />
        </div>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videos: state.mainReducer.videos,
        deathKillTimers: state.mainReducer.deathKillTimers,
        twitchPlayer: state.mainReducer.twitchPlayer
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoPage)
