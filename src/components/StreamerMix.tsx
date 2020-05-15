import React, { useEffect, useState, useRef } from 'react'
import Avatar from './Avatar'
import Table from './Table'
import url from '../constants'
import { gaEvents } from '../common_function'
import { Link } from 'react-router-dom'

const SreamerMix = () => {

    const [data, setData] = useState<{ [key: string]: any }>(() => ({ player: {}, clipsById: {}, clipsSorted: [], videosById: {}, videosSorted: [] }))
    const [currentMediaType, updateMediaType] = useState<'clips' | 'videos'>(() => 'videos')
    const { player } = data
    //const currentMediaType = useRef<'clips' | 'videos'>('videos')
    const mediaSorted = data[`${currentMediaType}Sorted`].slice(0, 3)
    const mediaById = data[`${currentMediaType}ById`]
    function getNextStreamer() {

        fetch(`${url}/api/player/random`)
            .then(data => data.json())
            .then(data => {
                setData(data)
            })
    }
    function updateFilter(newFilterName: 'videos' | 'clips' = 'videos') {
        updateMediaType(newFilterName)
    }

    useEffect(() => {
        getNextStreamer()
    }, [])
    return (
        <div className="streamer_mix p-8 py-4">
            <div className="text-primary-500 tracking-widest uppercase font-bold text-xs">STREAMER MIX</div>
                <div className="flex justify-between items-center">
                    <Link 
                        to={`/player/${player.id}/${player.slug}`} 
                        onClick={() => gaEvents({ eventCategory: ``, eventAction: 'click', eventLabel: `` })} 
                        className="h-12 w-12 flex items-center my-4">
                        <Avatar player={player} />
                        <span className="ml-3 text-white text-lg">{player.name}</span>
                    </Link>
                    <button
                        onClick={() => getNextStreamer()} 
                        type="submit"
                        className="w-16 h-16 bg-primary-800 rounded-full flex cursor-pointer justify-center items-center hover:bg-indigo-800 transition duration-300 ease-in-out">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <defs />
                            <path fill="white" fillRule="evenodd"
                                d="M9 1.64941C3.82432 2.90983 0 7.35519 0 12.6457c0 6.2706 5.37258 11.354 12 11.354 6.6274 0 12-5.0834 12-11.354 0-4.55969-2.8407-8.4916-6.939-10.2978l-1.0033 2.50815c3.0328 1.41698 5.1188 4.37282 5.1188 7.78965 0 4.7952-4.1085 8.6824-9.1765 8.6824-5.06802 0-9.17647-3.8872-9.17647-8.6824 0-3.80117 2.58166-7.03181 6.17647-8.20787V1.64941z"
                                clipRule="evenodd" />
                            <rect width="6.33061" height="1.77672" fill="white" rx="0.888361"
                                transform="matrix(.96933 .24575 -.27248 .96216 5.19482 0)" />
                            <rect width="6.03444" height="1.86392" fill="white" rx="0.931961"
                                transform="matrix(.27248 -.96216 .96933 .24575 7.85425 6.97754)" /></svg>
                    </button>
                </div>

            <div className="flex text-sm border-solid border-primary-500">
                <div className={`text-white cursor-pointer hover:text-indigo-400 pb-2 ${currentMediaType === 'videos' ? 'text-white border-b-4 border-primary-500 border-solid pb-2 cursor-pointer' : ''}`} onClick={() => updateFilter('videos')}>Recent Broadcasts</div>
                <div className={`text-white ml-8 cursor-pointer hover:text-indigo-400 pb-2 ${currentMediaType === 'clips' ? 'text-white border-b-4 border-primary-500 border-solid pb-2 cursor-pointer' : ''}`} onClick={() => updateFilter('clips')}>Reactions</div>
            </div>
            <Table mediaById={mediaById} singleColumn={true} darkMode={true} mediaSorted={mediaSorted} classNameProp={['dark', 'side']} />
        </div>
    )
}

export default SreamerMix