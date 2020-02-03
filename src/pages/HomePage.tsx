import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import StreamerVideos from '../components/StreamerVideos'
import LatestVideos from '../components/LatestVideos'
import '../styles/App.scss'
import { addLatestVideos } from '../actions'
import Loader from '../components/Loader'
import { State } from '../reducers/reducers'
import url, { isMobile } from '../constants'
import { shouldLazyLoad } from '../common_function'

const HomePage = ({ latestVideos, latestVideosById, onDataFeatured, onDataLatest }:
    { streamersById: any; featuredStreamers: number[]; latestVideos: number[], latestVideosById: any; onDataFeatured: any; onDataLatest: any }) => {

    // @ts-ignore
    const elementsOnLoad = isMobile && ((isMobile || { input: '' }).input || '').indexOf('ipad') === -1 ? 2 : 4
    useEffect(() => {
        function scroll() {
            if (shouldLazyLoad()) {
                setMediaSorted((state: any) => idsForActions[currAction.current].slice(0, state.length + 4))
            }
        }
        window.addEventListener('scroll', scroll)

        return () => { window.removeEventListener('scroll', scroll) }
    }, [])
    useEffect(() => {
        // fetch latest videos
        getTopRatedVideos(1)
    }, [])
    function getTopRatedVideos(page = 1) {
        fetch(`${url}/api/video/latest_videos?page=${page}`)
            .then(data => data.json())
            .then(data => {
                onDataLatest(data)
            })
    }
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
                gaEvent="Home Page::Top rated"
            />)}
        </div>
    );
}
const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        latestVideosById: state.mainReducer.latestVideosById,
        latestVideos: state.mainReducer.latestVideos
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onDataLatest: (data: any) => {
            dispatch(addLatestVideos(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)