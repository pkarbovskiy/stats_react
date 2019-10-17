import React, { useEffect, useState } from 'react'
import StreamerVideos from '../components/StreamerVideos'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { setCurrentSearch } from '../actions'

const SearchPage = ({ match, location, streamers, streamersById, onData }: { location: any; streamersById: any; match: any, streamers: any; onData: any }) => {
    const [search, setSearch] = useState()
    const searchString = location.search.replace('?', '').split('=')
    const url = ''//'http://192.168.232.129:8000'
    useEffect(() => {
        fetch(`${url}/api/search?q=${encodeURI(searchString[1])}`)
            .then(data => data.json())
            .then(data => {
                onData(data)
                setSearch(data)
            })
    }, [])
    return (
        <div className="search_page">
            {search && Object.keys(search.playersById).map(playerId =>
                <StreamerVideos
                    streamer={search.playersById[playerId].player}
                    mediaById={search.playersById[playerId].mediaById}
                    mediaSorted={search.playersById[playerId].mediaSorted}
                />
            )}
        </div>
    )
}


const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        search: state.mainReducer.streamersById,
        featuredStreamers: state.mainReducer.featuredStreamers
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onData: (data: any) => {
            dispatch(setCurrentSearch(data))
        }

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage)
