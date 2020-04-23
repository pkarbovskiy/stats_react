import React from 'react'
import SearchMobile from './SearchMobile'
import SidebarHeader from '../common/SidebarHeader'

const Sidebar = () => {
    return (
        <div className="vod-side bg-primary-900 lg:w-2/6">
            <div className="p-8">
                <SidebarHeader />
                <SearchMobile />
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
                                <path fill="white" fillRule="evenodd" d="M9 1.64941C3.82432 2.90983 0 7.35519 0 12.6457c0 6.2706 5.37258 11.354 12 11.354 6.6274 0 12-5.0834 12-11.354 0-4.55969-2.8407-8.4916-6.939-10.2978l-1.0033 2.50815c3.0328 1.41698 5.1188 4.37282 5.1188 7.78965 0 4.7952-4.1085 8.6824-9.1765 8.6824-5.06802 0-9.17647-3.8872-9.17647-8.6824 0-3.80117 2.58166-7.03181 6.17647-8.20787V1.64941z" clipRule="evenodd" />
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
    )
}

export default Sidebar
