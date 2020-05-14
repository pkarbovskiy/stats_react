import React, { useEffect, useState } from 'react'
import TwitchPlayer from '../components/TwitchPlayer'
import Mixer from '../components/Mixer'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import url, { mediaTypes } from '../constants'
import { addMedia } from '../actions'
import TopRated from '../components/TopRated'

const VideoPage = ({ match, onData }:
    { match: any; onData: any }) => {

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    const [timeline, setTimeline] = useState<{ splitEvents: any[], mergedEvents: any[] }>()
    const [video, setVideo] = useState<any>()

    useEffect(() => {
        const page = 1
        const amount = 12
        setVideo(false)
        function getVideoInfo(videoId: number) {
            fetch(`${url}/api/video/${videoId}`)
                .then(data => data.json())
                .then(data => {
                    setTimeline({
                        splitEvents: data['timeline'],
                        mergedEvents: [].concat(data['timeline']['eliminated'] || [], data['timeline']['eliminatedby'] || []).sort((a, b) => a[0] - b[0])
                    })
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
    }, [match.params.videoId])

    return (
        <div className="video_page">
            {video && (video.platform_id === 2 ?
                <Mixer {...video} videoTime={match.params.timer | 0} />
                : <TwitchPlayer {...video} targetElementId='twitchPlayer' autoplay={true} deathKillTimers={timeline} videoTime={match.params.timer | 0} />)
            }
        </div>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videos: state.mainReducer.videos,
        timelines: state.mainReducer.timelines,
        twitchPlayer: state.mainReducer.twitchPlayer
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onData: (data: any) => {
            dispatch(addMedia(data, mediaTypes.TOP_RATED))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoPage)
