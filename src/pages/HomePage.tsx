import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import StreamerVideos from '../components/StreamerVideos'
import LatestVideos from '../components/LatestVideos'
import '../styles/App.scss'
import { addStreamersById, addLatestVideos } from '../actions'
import Loader from '../components/Loader'
import { State } from '../reducers/reducers'
import url, { isMobile } from '../constants'
import { shouldLazyLoad } from '../common_function'

const HomePage = ({ streamersById, featuredStreamers, latestVideos, latestVideosById, onDataFeatured, onDataLatest }:
    { streamersById: any; featuredStreamers: number[]; latestVideos: number[], latestVideosById: any; onDataFeatured: any; onDataLatest: any }) => {
    //TODO: refactor
    // @ts-ignore
    const elementsOnLoad = isMobile && ((isMobile || { input: '' }).input || '').indexOf('ipad') === -1 ? 2 : 4
    const [featuredStreamersArr, setFeaturedStreamersArr] = useState(featuredStreamers.slice(0, elementsOnLoad))
    useEffect(() => {
        function scroll() {
            if (shouldLazyLoad()) {
                setFeaturedStreamersArr((state: any) => state.concat(featuredStreamers.slice(state.length, state.length + 2)))
            }

            if (featuredStreamers.length === featuredStreamersArr.length) {
                window.removeEventListener('scroll', scroll)
            }
        }
        window.addEventListener('scroll', scroll)

        return () => { window.removeEventListener('scroll', scroll) }
    }, [])
    useEffect(() => {
        // fetch featured streamers
        fetch(`${url}/api/player/featured_streamers?ids=3337,10654,3485,3429,5010,3372,3476,3603,3150,3426,3524,3316,3473,3365,3306,3591,8370,3510`)
            .then(data => data.json())
            .then(data => {
                onDataFeatured(data)
            })
        // fetch latest videos
        fetch(`${url}/api/video/latest_videos`)
            .then(data => data.json())
            .then(data => {
                onDataLatest(data)
            })
    }, [])

    return (
        <div className="home_page">
            <div className="home_page__info">
                How to use the site:<br></br>
                - *NEW* "Top Highlights" show you our best reactions over the last few days<br></br>
                - search your name above to see if you've killed a streamer<br></br>
                - choose a video and toggle AutoSkip to see just the action (wins, kills, deaths)
            </div>
            <h3>Top Highlights</h3>
            {latestVideos.length === 0 && <Loader />}
            {latestVideos.length > 0 && (<LatestVideos
                mediaSorted={latestVideos}
                mediaById={latestVideosById}
                gaEvent="Home Page::Latest videos"
            />)}
            <h3 className="home_page--header">Broadcasts by streamer</h3>
            {!!Object.keys(streamersById).length &&
                featuredStreamersArr.map((id: number) => {
                    if (!streamersById[id]) {
                        return (<></>)
                    }
                    return (<StreamerVideos key={id}
                        streamer={streamersById[id].streamer}
                        mediaById={streamersById[id].videosById}
                        mediaSorted={streamersById[id].videosSorted}
                        gaEvent="Home Page::Featured Streamers"
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
        latestVideos: state.mainReducer.latestVideos.slice(0, 6)
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onDataFeatured: (data: any) => {
            dispatch(addStreamersById(data))
        },
        onDataLatest: (data: any) => {
            dispatch(addLatestVideos(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)