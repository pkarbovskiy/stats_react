import React, { useEffect } from 'react'
import StreamerVideos from '../components/StreamerVideos'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { setCurrentSearch } from '../actions'

const SearchPage = ({ match, streamers, streamersById, onData }: { streamersById: any; match: any, streamers: any; onData: any }) => {
    const url = 'http://192.168.232.129:8000'
    useEffect(() => {
        fetch(`${url}/api/search?q=${encodeURI(match.location.query.q)}`)
            .then(data => data.json())
            .then(data => {
                onData(data)
            })
    }, [])
    return (
        <div className="search_page">
            {/* {streamers.map(({ streamer, videos }) =>
                <StreamerVideos
                    streamer={streamersById}
                    mediaById={streamersById.videosById}
                    mediaSorted={streamersById.videosSorted}
                />
            )} */}
        </div>
    )
}


const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        streamersById: state.mainReducer.streamersById,
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
