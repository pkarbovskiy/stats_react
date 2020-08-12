import React, { useEffect, useState, useMemo, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import TopRated from '../components/TopRated'
import { addMedia } from '../actions'
import Loader from '../components/Loader'
import '../styles/App.scss'
import { mediaTypes, elementsOnLoad, ROOT_URL } from '../constants'
import { shouldLazyLoad, gaEvents } from '../common_function'

const HomePage = () => {

    const currentSince = useRef<1 | 7 | 14>(7)

    const { mediaById, media }: { mediaById: any; media: number[] } = useSelector(
        (state: any) => ({
            mediaById: state.mainReducer.media[mediaTypes.TOP_RATED].byId,
            media: state.mainReducer.media[mediaTypes.TOP_RATED].media
        }),
        shallowEqual
    )

    /**
     * split all events by since and keep them in the same order
     * @param { entitySorted, entityById } entity which consists of just ids in array and dictionary
     * @returns object like { [since: number]: number[] }
     */
    function splitBySince({ entitySorted, entityById }: { entitySorted: any; entityById: any }): { [action: string]: number[] } {
        return entitySorted.reduce((acc: { [action: string]: number[] }, id: number) => {

            if (!entityById[id]) {
                return acc
            }

            if (entityById[id].since <= 1) {
                acc[1].push(id)
            }

            if (entityById[id].since <= 7) {
                acc[7].push(id)
            }

            if (entityById[id].since <= 14) {
                acc[14].push(id)
            }

            return acc
        }, { 1: [], 7: [], 14: [] })
    }

    const idsForSince = useMemo(
        () => splitBySince({ entitySorted: media, entityById: mediaById }),
        [
            media,
            mediaById
        ]
    )
    const dispatch = useDispatch()
    const [mediaSorted, setMediaSorted] = useState<number[]>([])

    useEffect(() => {
        setMediaSorted((state: any) => idsForSince[currentSince.current].slice(0, elementsOnLoad))
        function scroll() {
            if (shouldLazyLoad()) {
                setMediaSorted((state: any) => idsForSince[currentSince.current].slice(0, state.length + 6))
            }
        }

        window.addEventListener('scroll', scroll)

        return () => { window.removeEventListener('scroll', scroll) }
    }, [media, idsForSince])

    useEffect(() => {

        function getMediaForThePage(page = 1, amount = 3, since = 7) {
            fetch(`${ROOT_URL}/api/video/top_videos?page=${page}&amount=${amount}&since=${since}`)
                .then(data => data.json())
                .then(data => {
                    dispatch(addMedia({ data, since }, mediaTypes.TOP_RATED))
                })
        }

        if (media.length < elementsOnLoad) {

            // fetch media from server
            getMediaForThePage(1, elementsOnLoad)
            //setCurrentPage((state: number) => state++)
        }
    }, [dispatch, media.length])


    function sortBySince(since: 1 | 7 | 14): void {
        gaEvents({ eventCategory: `Top Rated Buttons:click:${since}`, eventAction: 'click', eventLabel: `${since}` })
        currentSince.current = since
        // setting what actions we need to see
        setMediaSorted(idsForSince[since].slice(0, elementsOnLoad))
    }

    return (
        <div className="p-6 py-12 sm:p-8 sm:py-10 lg:px-16">
            <div className={'text-primary-500 text-2xl font-bold mb-2 pl-2'}>Top Highlights</div>
            {mediaSorted.length === 0 && <Loader />}
            {mediaSorted.length > 0 && (
                <>
                    <div className="pl-2 home_page__filters">
                        <button className={currentSince.current === 1 ? 'active' : ''} onClick={() => sortBySince(1)}>Last 2 days</button>
                        <button className={currentSince.current === 7 ? 'active' : ''} onClick={() => sortBySince(7)}>Last Week</button>
                        <button className={currentSince.current === 14 ? 'active' : ''} onClick={() => sortBySince(14)}>Last 2 Weeks</button>
                    </div>
                    <TopRated
                        mediaSorted={mediaSorted}
                        mediaById={mediaById}
                        gaEvent="Home Page::Top rated"
                    />
                </>
            )}
        </div>
    );
}

export default HomePage