import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import StreamerVideos from '../components/StreamerVideos'
import '../styles/App.scss'
import { addStreamersById } from '../actions'
import { State } from '../reducers/reducers'
import url from '../constants'

const HomePage = ({ streamersById, featuredStreamers, onData }: { videosByDate: any, streamersById: any; featuredStreamers: number[]; onData: any }) => {

    useEffect(() => {
        fetch(`${url}/api/player/featured_streamers?ids=3429,3406,3337,10654,3485,5010,3372,3476,3603,3150,3426,3524,3316,3473,3365,3306,3591,8370,3510`)
            .then(data => data.json())
            .then(data => {
                onData(data)
            })
    }, [])
    return (
        <div className="home__page">
            {!!Object.keys(streamersById).length &&
                featuredStreamers.map((id: number) =>  {
                    if (!streamersById[id]) {
                        return (<></>)
                    }
                    return (<StreamerVideos
                        streamer={streamersById[id].streamer}
                        mediaById={streamersById[id].videosById}
                        mediaSorted={streamersById[id].videosSorted}
                    />)
                })
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
