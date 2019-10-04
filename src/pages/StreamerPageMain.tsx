import React from 'react'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'

//TODO: figure out proper type
const StreamerPageMain = ({ streamer, videos, match }: any) => {
    return (
        <div className="streamer_page">
            <div className="streamer_page__avatar">
                <img src={`http://streamsnipers.com/static/images/streamers/${streamer.name}.png`} alt={`${streamer.name} avatar`} />
                <h1>{streamer.name}</h1>
            </div>
            <h3>Recent one category</h3><Link to={`/player/${streamer.id}/${streamer.slug}/videos`}>View All ></Link>
            <Slider classNameProp="side" videos={videos} />
            <h3>Recent other category</h3><Link to={`/player/${streamer.id}/${streamer.slug}/clips`}>View All ></Link>
            <Slider classNameProp="side" videos={videos} />
        </div>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videos: state.mainReducer.videos,
        streamer: state.mainReducer.streamers[0].streamer
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreamerPageMain)