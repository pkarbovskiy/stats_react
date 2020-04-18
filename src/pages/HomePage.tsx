import React, { useEffect, useState, useMemo, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import TopRated from '../components/TopRated'
import '../styles/Custom.css'
import { addMedia } from '../actions'
import Loader from '../components/Loader'
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
                {/* <VodHeader> */}
                <div className="flex justify-between">
                    <a className="flex" href="#">
                        <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
                            <defs />
                            <circle cx="32" cy="32" r="32" fill="#303354" />
                            <path fill="#fff" d="M27.492 48.24c-.208 0-.332-.007-.356-.009a1.947 1.947 0 01-1.822-2.064c.066-1.074.994-1.9 2.064-1.822.012-.002 2.36.1 4.986-1.213a1.948 1.948 0 011.741 3.482c-2.958 1.48-5.662 1.626-6.613 1.626z" />
                            <path fill="#fff" d="M21.973 48.23c-4.928 0-8.937-4.008-8.937-8.936v-8.27c0-4.928 4.009-8.937 8.937-8.937h19.395c4.927 0 8.937 4.01 8.937 8.937a1.947 1.947 0 01-3.894 0 5.048 5.048 0 00-5.043-5.043H21.973a5.048 5.048 0 00-5.043 5.043v8.27a5.048 5.048 0 005.043 5.043 1.947 1.947 0 010 3.894zM28.514 19.916a1.569 1.569 0 01-1.569-1.569.993.993 0 00-1.983 0 1.569 1.569 0 01-3.137 0 4.133 4.133 0 014.129-4.128 4.133 4.133 0 014.128 4.129c0 .866-.702 1.568-1.568 1.568zM38.754 19.916a1.569 1.569 0 01-1.568-1.569.993.993 0 00-1.984 0 1.568 1.568 0 01-3.137 0 4.133 4.133 0 014.129-4.128 4.133 4.133 0 014.128 4.129c0 .866-.702 1.568-1.568 1.568z" />
                            <path fill="#666FE4" d="M42.795 36.812a3.128 3.128 0 00-3.124 3.124 3.128 3.128 0 003.124 3.124 3.128 3.128 0 003.124-3.124 3.128 3.128 0 00-3.124-3.124zm0 9.613a6.496 6.496 0 01-6.489-6.489 6.496 6.496 0 016.489-6.489 6.496 6.496 0 016.489 6.489 6.496 6.496 0 01-6.489 6.489z" />
                            <path fill="#fff" d="M31.482 34.431c-2.026 0-4.237-.409-6.296-1.644a1.714 1.714 0 011.763-2.94c4.376 2.625 10.222-.054 10.28-.081a1.716 1.716 0 012.279.822 1.712 1.712 0 01-.815 2.278c-.2.094-3.372 1.565-7.211 1.565z" />
                        </svg>
                        <svg className="w-24 h-16 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 112 38">
                            <defs />
                            <path fill="#fff" d="M12.8 17.256a4.9 4.9 0 01-2.824.862c-1.04 0-1.98-.287-2.818-.862a4.824 4.824 0 01-1.808-2.269L1.159 4.573A3.202 3.202 0 01.955 3.45c0-.844.291-1.561.875-2.153A2.874 2.874 0 013.957.407c.656 0 1.253.195 1.79.582.536.387.902.884 1.098 1.488l3.131 9.444 3.143-9.444A2.915 2.915 0 0114.212.99a2.957 2.957 0 011.783-.582c.834 0 1.55.299 2.146.895a2.93 2.93 0 01.895 2.147c0 .315-.082.69-.243 1.124l-4.178 10.414a4.814 4.814 0 01-1.815 2.269zM26.852 12.35c.754.805 1.727 1.208 2.92 1.208 1.192 0 2.168-.403 2.926-1.208.759-.805 1.138-1.833 1.138-3.086 0-1.252-.38-2.28-1.138-3.086-.758-.805-1.734-1.207-2.926-1.207-1.193 0-2.166.402-2.92 1.207s-1.13 1.834-1.13 3.086c0 1.253.376 2.281 1.13 3.086zm2.92 6.179c-1.235 0-2.387-.159-3.456-.474-1.07-.314-2.005-.755-2.805-1.322a9.14 9.14 0 01-2.064-2.006 8.552 8.552 0 01-1.304-2.55 9.595 9.595 0 01-.44-2.913c0-1.014.146-1.985.44-2.913a8.552 8.552 0 011.304-2.55 9.145 9.145 0 012.064-2.006c.8-.566 1.735-1.007 2.805-1.322C27.385.157 28.536 0 29.772 0c1.534 0 2.94.243 4.217.728 1.278.486 2.34 1.148 3.188 1.987a8.936 8.936 0 011.974 2.946 9.285 9.285 0 01.703 3.603c0 1.278-.235 2.48-.703 3.604a8.937 8.937 0 01-1.974 2.945c-.848.839-1.91 1.502-3.188 1.987-1.278.486-2.683.729-4.217.729zM47.583 12.902h2.466c1.125 0 2.047-.313 2.767-.94.72-.626 1.08-1.517 1.08-2.676 0-1.15-.362-2.043-1.086-2.677-.724-.635-1.645-.952-2.76-.952h-2.467v7.245zm-3.245 4.97c-.887 0-1.566-.236-2.039-.708-.472-.473-.709-1.153-.709-2.038V3.433c0-.886.237-1.567.71-2.044.472-.477 1.151-.716 2.038-.716h6.516c2.803 0 5.005.775 6.607 2.326 1.601 1.55 2.402 3.646 2.402 6.287 0 2.64-.8 4.732-2.402 6.274-1.602 1.542-3.804 2.313-6.607 2.313h-6.516zM5.071 22.435c.849-.11 4.68-.328 5.938 1.614.41.575.63 1.232.356 1.916-.247.657-.767 1.177-1.505 1.204-1.34.055-2.053-.903-3.503-1.287-.547-.164-.848 0-1.067.247a.778.778 0 00-.082.848c.383.712 1.916 1.095 2.517 1.26l.493.136c1.697.52 3.42.848 4.05 2.928.465 1.368.082 3.31-.903 4.597-1.533 1.86-4.269 2.161-5.774 2.025-1.423-.11-4.241-1.068-5.226-2.846-.383-.711-.52-1.56-.137-2.298.355-.658.848-1.04 1.56-1.095 1.532-.11 1.888 1.095 3.612 2.106.574.274 1.395.576 2.052.247.41-.164.684-.657.712-1.04.027-.274-.11-.739-.52-.93-.657-.274-4.242-.848-5.802-2.49-1.04-1.068-1.176-2.71-.766-3.968.657-2.052 2.107-2.928 3.995-3.174zM17.864 29.807l5.582-2.354c-.245-.711-2.161-1.203-3.502-.656-1.286.547-2.162 1.833-2.08 3.01zm8.264 6.485c-1.505 1.286-3.968 1.642-5.226 1.642-4.27 0-7.416-3.886-7.389-8.154.028-4.488 3.667-7.443 8.128-7.443 2.873 0 4.077 1.067 5.116 2.27.602.74 1.04 1.724 1.232 2.71.274 1.505-.739 1.97-1.013 2.08l-7.99 3.174c1.45 1.368 2.408 1.751 3.749.985.466-.274.657-.493.958-.712 1.067-.903 2.162-.766 2.928.082.766.876.793 1.998 0 2.9-.192.192-.301.302-.493.466zM32.662 32.496a2.138 2.138 0 002.08 2.189c1.15.027 2.162-.876 2.19-2.08.027-1.15-.904-2.162-2.08-2.19-1.177-.026-2.162.932-2.19 2.08zm1.341 5.39c-2.955.246-5.582-1.943-5.8-4.925-.247-2.956 1.97-5.555 4.87-5.801 1.204-.055 2.654.356 3.776.93 0-.903.11-1.697-.657-2.134-1.313-.767-2.709-.274-3.967.492-.74.41-1.697.165-2.08-.575-.438-.765-.054-1.75.52-2.161.711-.547.957-.739 1.833-1.012 1.697-.548 5.118-.657 6.95.984 1.697 1.424 1.67 4.379 1.642 5.583v5.227c-.027.93.192 2.298-1.121 3.146-.52.328-1.286.438-1.943.137-.329-.164-.603-.465-1.095-1.122-.82.52-1.86 1.122-2.928 1.231zM51.069 22.446c1.095.246 1.532 1.286 1.532 2.162 0 .793-.273 1.834-1.176 2.38-.657.356-1.697.493-2.572.055-.849-.41-1.177-.601-1.642-.41-.575.246-.492.766-.492 1.778v7.58c0 .876-.904 1.943-2.08 1.943-1.15 0-2.135-1.067-2.135-1.943v-11.93c0-1.04.985-1.724 2.135-1.724 1.176 0 1.997.274 2.107 1.23 1.121-.956 2.763-1.422 4.323-1.12zM59.145 22.43c1.806-.247 4.816.191 6.568 2.08.656.683.82 1.367.656 2.078-.192.63-.684 1.396-1.395 1.643-1.123.41-1.56-.301-2.82-1.095-.984-.575-2.298-.656-3.392-.273-1.122.383-2.162 1.724-2.162 2.708 0 1.04.165 2.19 1.286 3.202.876.82 2.026 1.095 3.202.82.547-.136.93-.355 1.56-.82.684-.52 1.067-.711 1.587-.766.63-.055 1.34.328 1.806.985.383.52.492 1.368.219 1.97-.603 1.478-3.175 2.6-4.379 2.819-2.052.437-4.925.11-7.114-2.08s-2.654-4.87-2.244-6.977c.465-2.354 1.888-4.68 4.68-5.802a7.047 7.047 0 011.942-.492zM81.273 36.035c0 .876-.958 1.916-2.108 1.916-1.204 0-2.134-1.04-2.134-1.916v-5.062c0-.958.11-3.283-1.369-4.214-.601-.329-1.668-.41-2.517.055-1.56.985-1.395 2.572-1.395 3.858v5.363c0 .876-.93 1.916-2.08 1.916-1.204 0-2.134-1.04-2.134-1.916V17.893c0-1.04.93-1.696 2.134-1.696 1.259 0 2.08.684 2.08 1.696v4.953c1.56-.602 4.816-.82 6.54.192 2.27 1.313 2.983 3.72 2.983 5.965v7.032zM85.576 32.361c1.56.028 2.764 1.314 2.764 2.846 0 1.505-1.286 2.737-2.874 2.736-1.532 0-2.763-1.313-2.736-2.845.028-1.532 1.34-2.764 2.846-2.737zM94 26.502v9.495c0 .876-.958 1.943-2.107 1.943-1.177 0-2.135-1.067-2.135-1.943v-9.495h-.438c-1.067 0-1.997-.876-1.997-1.97 0-1.067.876-1.97 1.943-1.97h.492v-2.955c0-.958.958-1.971 2.135-1.971 1.15 0 2.107 1.013 2.107 1.97v2.955h1.149c1.067 0 1.943.904 1.943 1.97 0 1.095-.93 1.971-1.998 1.971H94z" />
                            <path fill="#fff" d="M106.702 35.099c-.684 1.67-1.204 2.846-2.955 2.846-1.724 0-1.888-1.067-2.818-3.065l-4.105-9.769c-.41-1.04-.192-2.107.876-2.572 1.012-.41 2.325-.246 2.818.958l3.366 7.962 3.365-7.99c.466-1.176 1.807-1.259 2.847-.957 1.121.355 1.34 1.422.875 2.545l-4.269 10.042z" />
                        </svg>
                    </a>
                    <div className="flex items-center justify-center w-16 h-16 transition duration-300 ease-in-out rounded-full cursor-pointer lg:hidden bg-primary-800 hover:bg-indigo-800">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18">
                            <defs />
                            <rect width="24" height="4" fill="#fff" rx="2" />
                            <rect width="24" height="4" y="7" fill="#fff" rx="2" />
                            <rect width="24" height="4" y="14" fill="#fff" rx="2" />
                        </svg>
                    </div>
                </div>
                {/* </VodHeader */}
    
                {/* <VodSearchBox> */}
                <div className="relative h-16 my-6 lg:hidden">
                    <input className="w-full h-16 px-3 px-8 mb-8 text-lg border-4 rounded-full shadow-lg border-primary-500 focus:outline-none" type="search" placeholder="Epic or Streamer Name" />
                    <button type="submit" className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 mt-2 mr-2 rounded-full cursor-pointer bg-primary-500 ">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25">
                            <defs />
                            <path fill="#fff" fill-rule="evenodd" d="M9.107 9.416a5.456 5.456 0 015.46-5.451 5.456 5.456 0 015.462 5.451 5.456 5.456 0 01-5.461 5.452 5.456 5.456 0 01-5.461-5.452zM14.567 0C9.359 0 5.136 4.216 5.136 9.416a9.36 9.36 0 001.523 5.133L.593 20.605a1.996 1.996 0 000 2.826c.782.78 2.049.78 2.83 0l6.08-6.07a9.4 9.4 0 005.065 1.472c5.21 0 9.432-4.216 9.432-9.417C24 4.216 19.777 0 14.568 0z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                {/* </VodSearchBox> */}
    
                {/* <VodTwitchStream> */}
                <div className="h-64 my-8 overflow-hidden rounded-lg video-responsive">
                    <iframe className="w-full h-full" src="https://player.twitch.tv/?channel=vodsearch" scrolling="no"></iframe>
                </div>
                {/* </VodTwitchStream> */}
            </div>
    
            <div>
                {/* <VodStreamerMix> */}
                <div className="p-8 py-12" style={{background: '#151724'}}>
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