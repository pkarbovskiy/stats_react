import React from 'react'
import { connect } from 'react-redux'
import Table from '../components/Table'
import '../styles/App.scss'
import { action } from '../actions'
import { videosByDate } from '../selectors'
import { State } from '../reducers/reducers'


const HomePage: React.FC<{ videosByDate: any, videos: any; topStreamers: any }> = ({
    videosByDate,
    videos,
    topStreamers
}) => {
    return (
        <div className="home__page">
            <Table videos={videos} />
        </div>
    );
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videosByDate: videosByDate(state),
        videos: state.mainReducer.videos,
        topStreamers: state.mainReducer.topStreamers
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onDelete: (id: any) => {
            dispatch(action(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)
