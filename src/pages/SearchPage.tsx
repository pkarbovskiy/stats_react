import React from 'react'
import StreamerVideos from '../components/StreamerVideos'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'

const SearchPage = ({ match, streamers }: { match: any, streamers: any[] }) => (
    <div className="search_page">
        {streamers.map(({ streamer, videos }) =>
            <StreamerVideos streamer={streamer} videos={videos} />
        )}
    </div>
)


const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        streamers: state.mainReducer.streamers
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage)
