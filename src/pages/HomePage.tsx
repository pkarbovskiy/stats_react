import React, { useEffect, useState, useMemo, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import TopRated from '../components/TopRated'
import '../styles/Custom.css'
import { addMedia } from '../actions'
import Loader from '../components/Loader'
import Search from '../components/Search'
import Header from '../common/Header'
import url, { mediaTypes, elementsOnLoad } from '../constants'
import { shouldLazyLoad, gaEvents } from '../common_function'

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

        <div className="flex flex-col h-full lg:flex-row">
            {/*   <div className="home_page">
            <h3>Top Highlights</h3>
            {mediaSorted.length === 0 && <Loader />}
            {mediaSorted.length > 0 && (
                <>
                    <div className="home_page__filters">
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
        </div> */}
            <div className="vod-side bg-primary-900 lg:w-2/6">
                <div className="p-8">

                    <Header />
                    <Search />
                    {/* <VodTwitchStream> */}
                    <div className="h-64 my-8 overflow-hidden rounded-lg video-responsive">
                        <iframe className="w-full h-full" src="https://player.twitch.tv/?channel=vodsearch" scrolling="no"></iframe>
                    </div>
                    {/* </VodTwitchStream> */}
                </div>

                <div>
                    {/* <VodStreamerMix> */}
                    <div className="p-8 py-12" style={{ background: '#151724' }}>
                        <div className="text-xs font-bold tracking-widest uppercase text-primary-500">Streamer Mix</div>

                        <div className="flex items-center justify-between">
                            {/* <VodAvatar> */}
                            <a className="flex items-center w-12 h-12 my-4" href="#">
                                <img className="h-full rounded-full" src="https://media.forgecdn.net/avatars/100/287/636314173868302488.jpeg" />
                                <span className="ml-3 text-lg text-white">Shadowburn</span>
                            </a>
                            {/* </VodAvatar> */}
                            <button type="submit" className="flex items-center justify-center w-16 h-16 transition duration-300 ease-in-out rounded-full cursor-pointer bg-primary-800 hover:bg-indigo-800">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <defs />
                                    <path fill="white" fill-rule="evenodd" d="M9 1.64941C3.82432 2.90983 0 7.35519 0 12.6457c0 6.2706 5.37258 11.354 12 11.354 6.6274 0 12-5.0834 12-11.354 0-4.55969-2.8407-8.4916-6.939-10.2978l-1.0033 2.50815c3.0328 1.41698 5.1188 4.37282 5.1188 7.78965 0 4.7952-4.1085 8.6824-9.1765 8.6824-5.06802 0-9.17647-3.8872-9.17647-8.6824 0-3.80117 2.58166-7.03181 6.17647-8.20787V1.64941z" clip-rule="evenodd" />
                                    <rect width="6.33061" height="1.77672" fill="white" rx="0.888361" transform="matrix(.96933 .24575 -.27248 .96216 5.19482 0)" />
                                    <rect width="6.03444" height="1.86392" fill="white" rx="0.931961" transform="matrix(.27248 -.96216 .96933 .24575 7.85425 6.97754)" /></svg>
                            </button>
                        </div>

                        {/* <VodTabs> */}
                        <div className="flex text-sm border-b border-solid border-primary-500">
                            <div className="pb-2 text-white border-b-4 border-solid cursor-pointer border-primary-500">Recent Broadcasts</div>
                            <div className="ml-8 text-white cursor-pointer">Reactions</div>
                        </div>
                        {/* </VodTabs> */}

                        <div className="flex flex-col flex-wrap my-4 sm:flex-row">
                            <div className="p-2 sm:w-1/2 lg:w-full lg:px-0">
                                <div>
                                    <a href="#">
                                        <div className="relative p-2 text-gray-800 transition duration-300 ease-in-out bg-white rounded-lg shadow hover:shadow-lg">
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
                            <div className="p-2 sm:w-1/2 lg:w-full lg:hidden">
                                <div>
                                    <a href="#">
                                        <div className="relative p-2 text-gray-800 transition duration-300 ease-in-out bg-white rounded-lg shadow hover:shadow-lg">
                                            {/* 							<div className="absolute right-0 px-2 py-1 mt-4 text-xs font-bold text-center text-white bg-orange-500 rounded-l-full">
                0								Follower
                                            </div> */}
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
                        <div className="flex items-center justify-center w-full h-16 mt-4 text-white transition duration-300 ease-in-out rounded-full cursor-pointer bg-primary-800 hover:bg-indigo-800">View more</div>
                    </div>
                    {/* </VodStreamerMix> */}
                </div>
            </div>
            <div className="p-8 py-12 vod-content lg:px-16">
                <div className="mb-8 text-2xl font-bold text-primary-500">Top Highlights</div>
                {/* <VodTabs> */}
                <div className="flex my-4 text-sm">
                    <div className="pb-2 font-bold border-b-4 border-solid cursor-pointer text-primary-500 border-primary-500">Last 2 Days</div>
                    <div className="ml-8 text-gray-600 cursor-pointer">Last Week</div>
                    <div className="ml-8 text-gray-600 cursor-pointer">Last 2 Weeks</div>
                </div>
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
                            <path fill="white" fill-rule="evenodd" d="M19.6347 12.2744c.875.8721.8762 2.2872.0027 3.1608l-7.9088 7.9088c-.8736.8736-2.29119.8748-3.16626.0027-.02961-.0295-.05823-.0596-.08584-.0903L.655868 15.4357c-.873579-.8736-.874792-2.2911-.002705-3.1662.872087-.8751 2.287237-.8763 3.160817-.0027l4.09257 4.0926V2.24077c0-1.23543 1.00151-2.2386572 2.23695-2.24076711C11.3789-.00210702 12.3804.997697 12.3804 2.23313V16.3651l4.088-4.088c.8736-.8736 2.2912-.8748 3.1663-.0027z" clip-rule="evenodd" />
                        </svg>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default HomePage