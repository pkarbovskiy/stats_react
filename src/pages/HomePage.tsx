import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TopRated from '../components/TopRated'
import '../styles/App.scss'
import { addMedia } from '../actions'
import Loader from '../components/Loader'
//import { State } from '../reducers/reducers'
import url, { isMobile, mediaTypes } from '../constants'
import { shouldLazyLoad } from '../common_function'

const HomePage = () => {
    const elementsOnLoad = isMobile && ((isMobile || { input: '' }).input || '').indexOf('ipad') === -1 ? 3 : 36
    const {clipsSortedById, allMediaSorted}:{clipsSortedById:any; allMediaSorted: number[]} = useSelector(
        (state: any) => ({
            clipsSortedById: state.mainReducer.media[mediaTypes.TOP_RATED].byId,
            allMediaSorted: state.mainReducer.media[mediaTypes.TOP_RATED].media
        })
    )
    const dispatch = useDispatch()
    const [mediaSorted, setMediaSorted] = useState(allMediaSorted.slice(0, elementsOnLoad))

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
        getMediaForThePage(1, elementsOnLoad)
    }, [])
    function getMediaForThePage(page = 1, amount = 3) {
        fetch(`${url}/api/video/top_videos?page=${page}&amount=${amount}`)
            .then(data => data.json())
            .then(data => {
                dispatch(addMedia(data, mediaTypes.TOP_RATED))
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

export default HomePage