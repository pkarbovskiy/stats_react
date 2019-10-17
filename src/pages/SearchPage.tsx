import React, { useEffect, useState } from 'react'
import StreamerVideos from '../components/StreamerVideos'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { setCurrentSearch } from '../actions'
import url from '../constants'

const SearchPage = ({ location, searchFromCache, onData }: { location: any; searchFromCache: any; onData: any }) => {
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
        onData: (data: any, query:string) => {
            dispatch(setCurrentSearch(data, query))
        }

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage)
