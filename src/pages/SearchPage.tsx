import React, { useEffect, useState } from 'react'
import StreamerVideosNoHeader from '../components/StreamerVideosNoHeader'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { setCurrentSearch } from '../actions'
import Loader from '../components/Loader'
import { ROOT_URL } from '../constants'

const SearchPage = ({ location, searchFromCache, onData }:
    { location: any; searchFromCache: any; onData: any; }) => {
    const [search, setSearch] = useState<any>()
    const [loaded, setLoaded] = useState<any>(false)
    // TODO: may be make it protected
    const searchString = location.search.replace('?', '').split('=')
    useEffect(() => {
        setLoaded(false)
        const queryString = encodeURI(searchString[1])
        if (searchFromCache[queryString]) {
            setSearch(searchFromCache[queryString])
        } else {
            let url = `${ROOT_URL}/api/search?q=${searchString[1]}`

            if (localStorage.getItem('search') === 'v2') {
                url = `${ROOT_URL}/api/search_elastic?q=${searchString[1]}`
            }

            fetch(url)
                .then(data => data.json())
                .then(data => {
                    onData(data, searchString[1])
                    setSearch(data)
                    setLoaded(true)
                })
        }
    }, [searchString[1]])

    return (
        <div className="p-6 py-12 sm:p-8 lg:px-16">
            {!loaded && <Loader />}
            {loaded && (search.playerSorted.length > 0 ?
                <div className="mb-6 text-lg font-bold text-primary-500">We found {search.playerSorted.length} results for your query: </div> :
                <div className="mb-6 text-lg font-bold text-primary-500">Sorry! We couldn't find '{searchString[1]}' in any recent Twitch Broadcasts. Check back soon!</div>)}
            {loaded && search.playerSorted.length > 0 && search.playerSorted.map((playerId: number) => {
                if (search.playersId[playerId].videosSorted && search.playersId[playerId].videosSorted.length > 0) {
                    return (
                        <StreamerVideosNoHeader
                            key={playerId}
                            streamer={search.playersId[playerId].streamer}
                            mediaById={search.playersId[playerId].videosById}
                            mediaSorted={search.playersId[playerId].videosSorted.slice(0, 4)}
                            gaEvent="Search Page"
                        />
                    )
                } else {
                    return (<></>)
                }

            })}
        </div>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        searchFromCache: state.mainReducer.search
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onData: (data: any, query: string) => {
            dispatch(setCurrentSearch(data, query))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage)