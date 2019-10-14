import React, { useEffect, useState } from 'react'
import TwitchPlayer from '../components/TwitchPlayer'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import Table from '../components/Table'

const VideoPage = ({ match }: { match: any }) => {
    const [timeline, setTimeline] = useState()
    const [video, setVideo] = useState()
    const url = 'http://192.168.232.129:8000'
    useEffect(() => {
        function getVideoInfo(videoId: number) {
            fetch(`${url}/api/video/${videoId}`)
                .then(data => data.json())
                .then(data => {
                    setTimeline(data['timeline'])
                    setVideo(data['video'])
                })
        }
        if (match.path === '/random_video') {
            fetch(`${url}/api/video/random`)
                .then(data => data.json())
                .then(data => {
                    getVideoInfo(data.video_id)
                })
        } else {
            getVideoInfo(match.params.videoId | 0)
        }

    }, [])
    return (
        <div className="video_page">
            {video &&
                <TwitchPlayer {...video} targetElementId='twitchPlayer' autoplay={true} deathKillTimers={timeline} videoTime={match.params.timer | 0} />
            }
            <h3>Other broacats</h3>
            {/* <Table classNameProp="side" videos={video} /> */}
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
