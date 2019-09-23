import React, { useState } from 'react'
import { TwitchPlayer, TwitchPlayerOptions } from '../components/TwitchPlayer'
import DeathKill from '../components/DeathKill'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import Table from '../components/Table'

type VideoPage = {
    timeline: any;//Events;
    twitchPlayer: TwitchPlayerOptions;
}

const VideoPage: React.FC<{ videos: any; twitchPlayer: any; deathTimers: any[], killTimers: any[] }> = ({ twitchPlayer, videos, deathTimers, killTimers }) => {
    const [videoHandler, setVideoHandler] = useState(false);
    return (
        <div className="video_page">
            <TwitchPlayer options={{ ...twitchPlayer, setVideoHandler } as any} />
            <DeathKill videoHandler={videoHandler} deathTimers={deathTimers} killTimers={killTimers} currentDeath={'11028'} />
            <Table classNameProp="side" videos={videos} />
        </div>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videos: state.mainReducer.videos,
        deathTimers: state.mainReducer.deathTimers,
        killTimers: state.mainReducer.killTimers,
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
