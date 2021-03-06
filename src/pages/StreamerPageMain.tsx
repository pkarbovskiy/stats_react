import React from 'react'
import { State } from '../reducers/reducers'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from '../components/Slider'

//TODO: figure out proper type
const StreamerPageMain = ({ player, videosById, videosSorted, clipsById, clipsSorted }: any) => {
    const playerUrl = `/fortnite/player/${player.id}/${player.slug}`
    const videosUrl = `${playerUrl}/videos`
    const clipsUrl = `${playerUrl}/clips`
    return (
        <>
            {player &&
                <>
                    {videosSorted.length > 0 &&
                        <>
                            <div className="streamer_page__category">
                                <div className="text-lg font-bold text-indigo-800'">Recent Broadcasts</div>
                                <Link to={videosUrl} className="small_link">View All ></Link>
                            </div>
                            <Slider classNameProp={['side', 'horisontal']} mediaSorted={videosSorted} mediaById={videosById} includeStreamerName={false} />
                        </>
                    }
                    <div className="mt-6 streamer_page__category">
                        <div className="text-lg font-bold text-indigo-800'">Reactions</div>
                        <Link to={clipsUrl} className="small_link">View All ></Link>
                    </div>
                    <Slider classNameProp={['side', 'horisontal']} mediaSorted={clipsSorted} mediaById={clipsById} includeStreamerName={false} />
                </>
            }
        </>
    )
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        videosById: state.mainReducer.videosById,
        videosSorted: state.mainReducer.videosSorted.slice(0, 4),
        clipsSorted: state.mainReducer.clipsSorted.slice(0, 4),
        clipsById: state.mainReducer.clipsById,
        player: state.mainReducer.currentPlayer
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreamerPageMain)