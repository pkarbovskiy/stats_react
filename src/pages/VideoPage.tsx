import React, { useEffect, useState } from 'react'
import TwitchPlayer from '../components/TwitchPlayer'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import Table from '../components/Table'
import Loader from '../components/Loader'
import url from '../constants'
import { addLatestVideos } from '../actions'
import LatestVideos from '../components/LatestVideos'

const VideoPage = ({ match, latestVideos, latestVideosById, onData }: 
    { match: any; latestVideos: number[]; latestVideosById: any; onData: any }) => {
    const [timeline, setTimeline] = useState()
    const [video, setVideo] = useState()
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
        // fetch latest videos
        fetch(`${url}/api/video/latest_videos`)
        .then(data => data.json())
        .then(data => {
            onData(data)
        })

    }, [])
    return (
        <div className="video_page">
            {video &&
                <TwitchPlayer {...video} targetElementId='twitchPlayer' autoplay={true} deathKillTimers={timeline} videoTime={match.params.timer | 0} />
            }
            {/* <Table classNameProp="side" videos={video} /> */}
            {latestVideos.length === 0 && <Loader />}
            {(<LatestVideos
                mediaSorted={latestVideos}
                mediaById={latestVideosById}
            />)}
        </div>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videos: state.mainReducer.videos,
        deathKillTimers: state.mainReducer.deathKillTimers,
        twitchPlayer: state.mainReducer.twitchPlayer,
        latestVideosById: state.mainReducer.latestVideosById,
        latestVideos: state.mainReducer.latestVideos.slice(0, 6)
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onData: (data: any) => {
            dispatch(addLatestVideos(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoPage)
