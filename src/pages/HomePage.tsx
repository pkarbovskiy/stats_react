import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TopRated from '../components/TopRated'
import '../styles/App.scss'
import { addMedia } from '../actions'
import Loader from '../components/Loader'
//import { State } from '../reducers/reducers'
import url, { mobileNotIpad, mediaTypes } from '../constants'
import { shouldLazyLoad } from '../common_function'

const HomePage = () => {
    const additionLazy = 6
    const elementsOnLoad = mobileNotIpad ? 3 : 36
    const [pageNamber, setNextPageToLoad] = useState<number>(1)
    const amountCurrShowing = useRef(elementsOnLoad)
    const { mediaById, allMediaRedux }: { mediaById: any; allMediaRedux: number[] } = useSelector(
        (state: any) => ({
            mediaById: state.mainReducer.media[mediaTypes.TOP_RATED].byId,
            allMediaRedux: state.mainReducer.media[mediaTypes.TOP_RATED].media
        })
    )
    const dispatch = useDispatch()

    function scroll() {
        if (shouldLazyLoad() && allMediaRedux.length | 0) {
            if (amountCurrShowing.current + additionLazy >= allMediaRedux.length) {
                getMediaForThePage(pageNamber, elementsOnLoad)
            }
            amountCurrShowing.current += additionLazy
        }
    }
    useEffect(() => {
        loadOneMorePage()
        window.addEventListener('scroll', scroll)
        return () => { window.removeEventListener('scroll', scroll) }
    }, [allMediaRedux.length])

    function loadOneMorePage() {
        // fetch media from server
        getMediaForThePage(pageNamber, elementsOnLoad)
    }

    function getMediaForThePage(page = 1, amount = 3) {
        fetch(`${url}/api/video/top_videos?page=${page}&amount=${amount}`)
            .then(data => data.json())
            .then(data => {
                setNextPageToLoad((state: number) => state + 1)
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
            {allMediaRedux.length === 0 && <Loader />}
            {allMediaRedux.length > 0 && (<TopRated
                mediaSorted={allMediaRedux.slice(0, amountCurrShowing.current)}
                mediaById={mediaById}
                gaEvent="Home Page::Top rated"
            />)}
        </div>
    );
}

export default HomePage