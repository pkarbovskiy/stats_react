import React, { useEffect, useState } from 'react'
import StreamerVideosNoHeader from '../components/StreamerVideosNoHeader'
import TopRated from '../components/TopRated'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { setCurrentSearch, addMedia } from '../actions'
import Loader from '../components/Loader'
import url, { mediaTypes } from '../constants'

const SearchPage = ({ location, searchFromCache, clipsSortedRedux, clipsSortedById, onData, onDataMedia }:
    { location: any; searchFromCache: any; clipsSortedRedux: number[], clipsSortedById: any, onData: any; onDataMedia: any }) => {
    const [search, setSearch] = useState()
    const [loaded, setLoaded] = useState(false)
    const [clipsSorted, setClipsSorted] = useState(clipsSortedRedux.slice(0, 6))
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
                    setLoaded(true)
                })
        }
        // fetch latest videos
        fetch(`${url}/api/video/top_videos?page=1&amount=6`)
            .then(data => data.json())
            .then(data => {
                onDataMedia(data)
                setClipsSorted(()=> data.media.slice(0, 6))
            })
    }, [])
    return (
        <div className="search_page">
            {!loaded && <Loader />}
            {loaded && (search.playerSorted.length > 0 ?
                <h3> We found {search.playerSorted.length} results for your query: </h3> :
                <h3> Sorry, we couldn't find any search results for your query. Check back again soon!</h3>)}
            {loaded && search.playerSorted.length > 0 && search.playerSorted.map((playerId: number) => {
                if (search.playersId[playerId].videosSorted && search.playersId[playerId].videosSorted.length > 0) {
                    return (
                        <StreamerVideosNoHeader
                            key={playerId}
                            streamer={search.playersId[playerId].streamer}
                            mediaById={search.playersId[playerId].videosById}
                            mediaSorted={search.playersId[playerId].videosSorted.slice(0, 6)}
                            gaEvent="Search Page"
                        />
                    )
                } else {
                    return (<></>)
                }

            })}
            {clipsSorted.length > 0 && (
                <>
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <h3>Also check out top highlights:</h3>
                    <TopRated
                        mediaSorted={clipsSorted}
                        mediaById={clipsSortedById}
                        gaEvent="Search Page::Top rated"
                    />
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        searchFromCache: state.mainReducer.search,
        clipsSortedById: state.mainReducer.media[mediaTypes.TOP_RATED].byId,
        clipsSortedRedux: state.mainReducer.media[mediaTypes.TOP_RATED].media.slice(0, 6)
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onData: (data: any, query: string) => {
            dispatch(setCurrentSearch(data, query))
        },
        onDataMedia: (data: any) => {
            dispatch(addMedia(data))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage)
