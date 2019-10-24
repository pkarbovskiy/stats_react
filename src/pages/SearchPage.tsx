import React, { useEffect, useState } from 'react'
import StreamerVideos from '../components/StreamerVideos'
import LatestVideos from '../components/LatestVideos'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { setCurrentSearch, addLatestVideos } from '../actions'
import url from '../constants'

const SearchPage = ({ location, searchFromCache, latestVideos, latestVideosById, onData, onDataLatest }: 
    { location: any; searchFromCache: any; latestVideos: number[], latestVideosById: any, onData: any; onDataLatest: any }) => {
    const [search, setSearch] = useState()
    // TODO: may be make it protected
    const searchString = location.search.replace('?', '').split('=')
    useEffect(() => {
        const queryString = encodeURI(searchString[1])
        if (searchFromCache[queryString]) {
            setSearch(searchFromCache[queryString])
        } else {
            fetch(`${url}/api/search?q=${searchString[1]}`)
                .then(data => data.json())
                .then(data => {
                    onData(data, searchString[1])
                    setSearch(data)
                })
        }
        // fetch latest videos
        fetch(`${url}/api/video/latest_videos`)
        .then(data => data.json())
        .then(data => {
            onDataLatest(data)
        })
    }, [])
    return (
        <div className="search_page">
            {search && Object.keys(search).map(playerId =>
                <StreamerVideos
                    streamer={search[playerId].streamer}
                    mediaById={search[playerId].videosById}
                    mediaSorted={search[playerId].videosSorted}
                />
            )}
                {(<LatestVideos
                    mediaSorted={latestVideos}
                    mediaById={latestVideosById}
            />)}
        </div>
    )
}


const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        searchFromCache: state.mainReducer.search,
        latestVideosById: state.mainReducer.latestVideosById,
        latestVideos: state.mainReducer.latestVideos.slice(0, 5)
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onData: (data: any, query:string) => {
            dispatch(setCurrentSearch(data, query))
        },
        onDataLatest: (data: any) => {
            dispatch(addLatestVideos(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage)
