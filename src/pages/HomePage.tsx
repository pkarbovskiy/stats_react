import React from 'react';
import {connect} from 'react-redux'
//import logo from '../logo.svg'
import TopStreamers from '../components/TopSteamers'
import Table from '../components/Table';
import '../styles/App.scss';
import { action} from '../actions'
import {videosByDate} from '../selectors'


const HomePage: React.FC<{videosByDate:any, videos: any; topStreamers:any}> = ({
    videosByDate,
    videos,
    topStreamers
}) => {
    return (
        <div className="home__page">
            <TopStreamers topStreamers={topStreamers} />
            <Table videos={videos}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      videosByDate: videosByDate(state),
      videos: state.videos,
      topStreamers: state.topStreamers
    }
}
  
const mapDispatchToProps = (dispatch:(arg0:any) => {}) => {
    return {
        onDelete: id => {
        dispatch(action(id));
        }
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)

