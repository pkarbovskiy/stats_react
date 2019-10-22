import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StreamerVideos from '../components/StreamerVideos'
import LatestVideos from '../components/LatestVideos'
import '../styles/App.scss'
import { addStreamersById, addLatestVideosById } from '../actions'
import { State } from '../reducers/reducers'
import url from '../constants'

const HomePage = ({ streamersById, featuredStreamers, latestVideos, latestVideosById, onDataFeatured, onDataLatest }: 
    { streamersById: any; featuredStreamers: number[]; latestVideos: number[], latestVideosById: any; onDataFeatured: any; onDataLatest: any }) => {

    useEffect(() => {
        // fetch featured streamers
        fetch(`${url}/api/player/featured_streamers?ids=3429,3337,10654,3485,5010,3372,3476,3603,3150,3426,3524,3316,3473,3365,3306,3591,8370,3510`)
            .then(data => data.json())
            .then(data => {
                onDataFeatured(data)
            })
        // fetch latest videos
        fetch('${url}/api/video/latest_videos')
            .then(data => data.json())
            .then(data => {
                onDataLatest(data)
            })
    }, [])

    return (
        <div className="home__page">
            {(<LatestVideos
            mediaSorted={latestVideos}
            mediaById={latestVideosById}
            />)
            }
            {!!Object.keys(streamersById).length &&
                featuredStreamers.map((id: number) =>  {
                    if (!streamersById[id]) {
                        return (<></>)
                    }
                    return (<StreamerVideos
                        streamer={streamersById[id].streamer}
                        mediaById={streamersById[id].videosById}
                        mediaSorted={streamersById[id].videosSorted}
                    />)
                })
            }
        </div>
    );
}
const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        streamersById: state.mainReducer.streamersById,
        featuredStreamers: state.mainReducer.featuredStreamers,
        latestVideosById: state.mainReducer.latestVideosById,
        latestVideos: state.mainReducer.latestVideos
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onDataFeatured: (data: any) => {
            dispatch(addStreamersById(data))
        },
        onDataLatest: (data: any) => {
            dispatch(addLatestVideosById(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)