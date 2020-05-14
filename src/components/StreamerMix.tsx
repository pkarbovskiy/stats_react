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
        <div className="streamer_mix">
            <h3 className="streamer_mix__header">STREAMER MIX</h3>
            <button type="submit" className="streamer_mix__refresh" onClick={() => getNextStreamer()}>
                <svg fill="none" viewBox="0 0 24 24">
                    <defs />
                    <path fill="white" fillRule="evenodd" d="M9 1.64941C3.82432 2.90983 0 7.35519 0 12.6457c0 6.2706 5.37258 11.354 12 11.354 6.6274 0 12-5.0834 12-11.354 0-4.55969-2.8407-8.4916-6.939-10.2978l-1.0033 2.50815c3.0328 1.41698 5.1188 4.37282 5.1188 7.78965 0 4.7952-4.1085 8.6824-9.1765 8.6824-5.06802 0-9.17647-3.8872-9.17647-8.6824 0-3.80117 2.58166-7.03181 6.17647-8.20787V1.64941z"
                        clipRule="evenodd" />
                    <rect width="6.33061" height="1.77672" fill="white" rx="0.888361" transform="matrix(.96933 .24575 -.27248 .96216 5.19482 0)" />
                    <rect width="6.03444" height="1.86392" fill="white" rx="0.931961" transform="matrix(.27248 -.96216 .96933 .24575 7.85425 6.97754)" />
                </svg>
            </button>
            <Link to={`/player/${player.id}/${player.slug}`} onClick={() => gaEvents({ eventCategory: ``, eventAction: 'click', eventLabel: `` })} className="streamer_mix__player">
                <Avatar player={player} />
                <span className="streamer_mix__player__name">{player.name}</span>
            </Link>
            <div className="streamer_mix__filters">
                <button className={`streamer_mix__filters__videos ${currentMediaType === 'videos' ? 'active' : ''}`} onClick={() => updateFilter('videos')}>Recent Broadcasts</button>
                <button className={`streamer_mix__filters__clips ${currentMediaType === 'clips' ? 'active' : ''}`} onClick={() => updateFilter('clips')}>Reactions</button>
            </div>
            <Table mediaById={mediaById} mediaSorted={mediaSorted} classNameProp={['dark', 'side']} />
        </div>
    )
}

export default SreamerMix