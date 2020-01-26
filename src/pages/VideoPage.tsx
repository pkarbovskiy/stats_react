import React, { useEffect, useState } from 'react'
import TwitchPlayer from '../components/TwitchPlayer'
import Mixer from '../components/Mixer'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import Loader from '../components/Loader'
import url, { mediaTypes } from '../constants'
import { addMedia } from '../actions'
import TopRated from '../components/TopRated'

const VideoPage = ({ match, mediaRedux, mediaById, onData }:
    { match: any; mediaRedux: number[]; mediaById: any; onData: any }) => {

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    const [timeline, setTimeline] = useState()
    const [video, setVideo] = useState()
    const [media, setMedia] = useState<number[]>(mediaRedux)

    useEffect(() => {
        setVideo(false)
        function getVideoInfo(videoId: number) {
            fetch(`${url}/api/video/${videoId}`)
                .then(data => data.json())
                .then(data => {
                    setTimeline({
                        splitEvents: data['timeline'],
                        mergedEvents: [].concat(data['timeline']['eliminated'] || [], data['timeline']['eliminatedby']).sort((a, b) => a[0] - b[0])
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
        // fetch latest videos
        fetch(`${url}/api/video/top_videos`)
            .then(data => data.json())
            .then(data => {
                onData(data)
            })

    }, [match.params.videoId])

    useEffect(() => {
        setMedia(() => mediaRedux)
    }, [mediaRedux])

    return (
        <div className="video_page">
            {video && (video.platform_id === 2 ?
                <Mixer {...video} videoTime={match.params.timer | 0} />
                : <TwitchPlayer {...video} targetElementId='twitchPlayer' autoplay={true} deathKillTimers={timeline} videoTime={match.params.timer | 0} />)
            }
            {/* <Table classNameProp="side" videos={video} /> */}
            {media.length > 0 && <>
                <br></br><br></br><br></br><br></br><br></br>
                <h3>Also check out top highlights</h3>
                <TopRated
                    mediaSorted={media}
                    mediaById={mediaById}
                    gaEvent="Video Page::Top rated"
                />
            </>
            }
        </div>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videos: state.mainReducer.videos,
        deathKillTimers: state.mainReducer.deathKillTimers,
        twitchPlayer: state.mainReducer.twitchPlayer,
        mediaById: state.mainReducer.media[mediaTypes.TOP_RATED].byId,
        mediaRedux: state.mainReducer.media[mediaTypes.TOP_RATED].media.slice(0, 6)
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onData: (data: any) => {
            dispatch(addMedia(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoPage)
