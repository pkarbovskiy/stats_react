import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StreamerVideos from '../components/StreamerVideos'
import '../styles/App.scss'
import { addStreamersById } from '../actions'
import { State } from '../reducers/reducers'


const HomePage = ({ streamersById, featuredStreamers, onData }: { videosByDate: any, streamersById: any; featuredStreamers: number[]; onData: any }) => {

    const url = 'http://192.168.232.129:8000'
    useEffect(() => {
        fetch(`${url}/api/player/featured_streamers?ids=3429,3406,3337,10654`)
            .then(data => data.json())
            .then(data => {
                onData(data)
            })
    }, [])
    return (
        <div className="home__page">
            {!!Object.keys(streamersById).length &&
                featuredStreamers.map((id: number) => (
                    <StreamerVideos
                        streamer={streamersById[id].streamer}
                        mediaById={streamersById[id].videosById}
                        mediaSorted={streamersById[id].videosSorted}
                    />
                ))
            }
        </div>
    );
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
            dispatch(addStreamersById(data))
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)
