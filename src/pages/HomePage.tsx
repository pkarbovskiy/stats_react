import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import TopRated from '../components/TopRated'
import '../styles/App.scss'
import { addLatestVideos } from '../actions'
import Loader from '../components/Loader'
import { State } from '../reducers/reducers'
import url, { isMobile } from '../constants'
import { shouldLazyLoad } from '../common_function'

const HomePage = ({ clipsSorted, clipsSortedById, onDataLatest, allMediaSorted }:
    { streamersById: any; featuredStreamers: number[]; clipsSorted: number[], clipsSortedById: any; onDataLatest: any; allMediaSorted: number[] }) => {
    // @ts-ignore
    const elementsOnLoad = 36//isMobile && ((isMobile || { input: '' }).input || '').indexOf('ipad') === -1 ? 3 : 36
    const [mediaSorted, setMediaSorted] = useState(clipsSorted)

    if (mediaSorted.length === 0 && clipsSorted.length > 0) {
        setMediaSorted(state => clipsSorted.slice(0, elementsOnLoad))
    }

    const initialAmount = clipsSorted.length
    useEffect(() => {
        function scroll() {
            if (shouldLazyLoad()) {
                setMediaSorted((state: any) => allMediaSorted.slice(0, state.length + 6))
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
        fetch(`${url}/api/video/top_videos`)
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
            {mediaSorted.length === 0 && <Loader />}
            {mediaSorted.length > 0 && (<TopRated
                mediaSorted={mediaSorted}
                mediaById={clipsSortedById}
                gaEvent="Home Page::Top rated"
            />)}
        </div>
    );
}
const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        clipsSortedById: state.mainReducer.latestVideosById,
        clipsSorted: state.mainReducer.latestVideos.slice(0, 36),
        allMediaSorted: state.mainReducer.latestVideos
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