import React, { useEffect, useState, useMemo, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import TopRated from '../components/TopRated'
import '../styles/Custom.css'
import { addMedia } from '../actions'
import Loader from '../components/Loader'
import Sidebar from '../components/Sidebar'
import Tags from '../components/Tags'


import url, { mediaTypes, elementsOnLoad } from '../constants'
import { shouldLazyLoad, gaEvents } from '../common_function'
import Header from '../common/Header'

//----------------------------------------------------------

//----------------------------------------------------------

const HomePage = () => {

    const { mediaById, media }: { mediaById: any; media: number[] } = useSelector(
        (state: any) => ({
            mediaById: state.mainReducer.media[mediaTypes.TOP_RATED].byId,
            media: state.mainReducer.media[mediaTypes.TOP_RATED].media
        }),
        shallowEqual
    )

    const currentSince = useRef<1 | 7 | 14>(7)

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

        function getMediaForThePage(page = 1, amount = 3) {
            fetch(`${url}/api/video/top_videos?page=${page}&amount=${amount}`)
                .then(data => data.json())
                .then(data => {
                    dispatch(addMedia(data, mediaTypes.TOP_RATED))
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
        <>
            {/* {mediaSorted.length === 0 && <Loader />}
            mediaSorted.length >= 0 && () */}
            <div className="flex flex-col h-full lg:flex-row">
                <Sidebar />
                {/* The homepage container */}
                <div className="w-full pb-8 vod-content">

                    <Header />
                    <Tags />
                    <div className="flex my-8 ml-8 text-2xl font-bold text-primary-500">Top Highlights</div>
                    {/* <VodTabs> */}
                    <div className="flex my-4 text-sm">
                        <div className={currentSince.current === 1 ? "ml-8 pb-2 font-bold border-b-4 border-solid cursor-pointer text-primary-500 border-primary-500 w" : 'ml-8 text-gray-600 cursor-pointer'} onClick={() => sortBySince(1)}>Last 2 Days</div>
                        <div className={currentSince.current === 7 ? "ml-8 pb-2 font-bold border-b-4 border-solid cursor-pointer text-primary-500 border-primary-500" : 'ml-8 text-gray-600 cursor-pointer'} onClick={() => sortBySince(7)}>Last Week</div>
                        <div className={currentSince.current === 14 ? "ml-8 pb-2 font-bold border-b-4 border-solid cursor-pointer text-primary-500 border-primary-500" : 'ml-8 text-gray-600 cursor-pointer'} onClick={() => sortBySince(14)}>Last 2 Weeks</div>
                    </div>
                    <TopRated
                        mediaSorted={mediaSorted}
                        mediaById={mediaById}
                        gaEvent="Home Page::Top rated"
                    />
                    {/* </VodTabs> */}
                    <div className="flex flex-col flex-wrap my-4 sm:flex-row">
                        <div className="p-2 sm:w-1/2 xl:w-1/3">
                            <div>
                                <a href="#">
                                    <div className="relative p-2 text-gray-800 bg-white rounded-lg shadow hover:shadow-lg">
                                        <img src="https://i.ytimg.com/vi/jtFRndWvu5A/maxresdefault.jpg" className="object-cover w-full h-32 mb-2 rounded-lg rounded-b-none" />
                                        <div className="flex items-center">
                                            <img src="https://media.forgecdn.net/avatars/100/287/636314173868302488.jpeg" className="object-cover object-center w-12 h-12 mr-2 border-4 border-white rounded-full" />
                                            <div className="">
                                                <div className="font-bold text-purple-500">Shadowburn</div>

                                                <div className="mt-1 text-sm font-medium">2k viewers and ur pwning</div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 xl:w-1/3">
                            <div>
                                <a href="#">
                                    <div className="relative p-2 text-gray-800 bg-white rounded-lg shadow hover:shadow-lg">
                                        <img src="https://i.ytimg.com/vi/jtFRndWvu5A/maxresdefault.jpg" className="object-cover w-full h-32 mb-2 rounded-lg rounded-b-none" />
                                        <div className="flex items-center">
                                            <img src="https://media.forgecdn.net/avatars/100/287/636314173868302488.jpeg" className="object-cover object-center w-12 h-12 mr-2 border-4 border-white rounded-full" />
                                            <div className="">
                                                <div className="font-bold text-purple-500">Shadowburn</div>

                                                <div className="mt-1 text-sm font-medium">How are you u winning</div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 xl:w-1/3">
                            <div>
                                <a href="#">
                                    <div className="relative p-2 text-gray-800 bg-white rounded-lg shadow hover:shadow-lg">
                                        <img src="https://i.ytimg.com/vi/jtFRndWvu5A/maxresdefault.jpg" className="object-cover w-full h-32 mb-2 rounded-lg rounded-b-none" />
                                        <div className="flex items-center">
                                            <img src="https://media.forgecdn.net/avatars/100/287/636314173868302488.jpeg" className="object-cover object-center w-12 h-12 mr-2 border-4 border-white rounded-full" />
                                            <div className="">
                                                <div className="font-bold text-purple-500">Shadowburn</div>

                                                <div className="mt-1 text-sm font-medium">How are you u winning</div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 xl:w-1/3">
                            <div>
                                <a href="#">
                                    <div className="relative p-2 text-gray-800 bg-white rounded-lg shadow hover:shadow-lg">
                                        <img src="https://i.ytimg.com/vi/jtFRndWvu5A/maxresdefault.jpg" className="object-cover w-full h-32 mb-2 rounded-lg rounded-b-none" />
                                        <div className="flex items-center">
                                            <img src="https://media.forgecdn.net/avatars/100/287/636314173868302488.jpeg" className="object-cover object-center w-12 h-12 mr-2 border-4 border-white rounded-full" />
                                            <div className="">
                                                <div className="font-bold text-purple-500">Shadowburn</div>

                                                <div className="mt-1 text-sm font-medium">How are you u winning</div>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full mt-12 cursor-pointer">
                        <div className="mb-2 text-sm font-bold">
                            Load more
                </div>
                        <div className="flex items-center justify-center w-16 h-16 transition duration-300 ease-in-out rounded-full bg-primary-800 hover:bg-indigo-800">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 24">
                                <defs />
                                <path fill="white" fillRule="evenodd" d="M19.6347 12.2744c.875.8721.8762 2.2872.0027 3.1608l-7.9088 7.9088c-.8736.8736-2.29119.8748-3.16626.0027-.02961-.0295-.05823-.0596-.08584-.0903L.655868 15.4357c-.873579-.8736-.874792-2.2911-.002705-3.1662.872087-.8751 2.287237-.8763 3.160817-.0027l4.09257 4.0926V2.24077c0-1.23543 1.00151-2.2386572 2.23695-2.24076711C11.3789-.00210702 12.3804.997697 12.3804 2.23313V16.3651l4.088-4.088c.8736-.8736 2.2912-.8748 3.1663-.0027z" clipRule="evenodd" />
                            </svg>

                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default HomePage