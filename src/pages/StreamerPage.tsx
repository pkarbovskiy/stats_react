import React from 'react'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import Table from '../components/Table'

//TODO: figure out proper type
const StreamerPage = ({streamer, videos, match}:any) => {
  return (
    <div className="streamer_page">
        <div className="streamer_page__avatar">
          <img src={`http://streamsnipers.com/static/images/streamers/${streamer.name}.png`} alt={`${streamer.name} avatar`} />
          <h1>{streamer.name}</h1>
        </div>
        <Table classNameProp="side" videos={videos} />
    </div>
  )
}

const mapStateToProps = (state: { mainReducer: State }) => {
  return {
      videos: state.mainReducer.videos,
      streamer: state.mainReducer.streamers[0]
  }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamerPage)