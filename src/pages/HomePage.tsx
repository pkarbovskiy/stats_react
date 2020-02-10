import React, { useEffect, useState } from 'react'
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
    const { clipsSortedById, allMediaSortedRedux }: { clipsSortedById: any; allMediaSortedRedux: number[] } = useSelector(
        (state: any) => ({
            clipsSortedById: state.mainReducer.media[mediaTypes.TOP_RATED].byId,
            allMediaSortedRedux: state.mainReducer.media[mediaTypes.TOP_RATED].media
        })
    )
    const dispatch = useDispatch()
    const [allMediaSorted, setAllMediaSorted] = useState<number[]>([])
    const [mediaSorted, setMediaSorted] = useState<number[]>([])
    const [nextPageToLoad, setNextPageToLoad] = useState<number>(1)
    
    useEffect(() => {
        function scroll() {
            if (shouldLazyLoad() && allMediaSorted.length | 0) {
                if (mediaSorted.length + additionLazy > allMediaSorted.length) {
                    getMediaForThePage(nextPageToLoad, elementsOnLoad)
                }
                setMediaSorted((state: any) => allMediaSorted.slice(0, state.length + additionLazy))
            }
        }
        window.addEventListener('scroll', scroll)
        return () => { window.removeEventListener('scroll', scroll) }
    }, [])

    // after redux is updated update the state of the component
    useEffect(() => {
        setAllMediaSorted(() => allMediaSortedRedux)
    }, [allMediaSortedRedux.length])

    useEffect(() => {
        if (allMediaSorted.length < elementsOnLoad) {
            // fetch media from server
            getMediaForThePage(nextPageToLoad, elementsOnLoad)
            
        }
    }, [allMediaSorted.length])

    function getMediaForThePage(page = 1, amount = 3) {
        fetch(`${url}/api/video/top_videos?page=${page}&amount=${amount}`)
            .then(data => data.json())
            .then(data => {
                dispatch(addMedia(data, mediaTypes.TOP_RATED))
                setMediaSorted((state:number[]) => state.concat(data.media.slice(0, elementsOnLoad)))
                setNextPageToLoad((state: number) => state + 1)
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