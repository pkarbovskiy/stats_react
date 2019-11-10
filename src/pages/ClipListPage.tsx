import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addVideosById } from '../actions'
import { State } from '../reducers/reducers'
import Table from '../components/Table'
declare global {
    interface Window { body: any; }
}
const VideoListPage = ({ player, playersById, clipsById, clipsSorted, allMediaSorted, match }: any) => {
    const [mediaSorted, setMediaSorted] = useState(clipsSorted)
    function error(event: any) {
        event.target.src = "//d38ev7kpu49one.cloudfront.net/static/face.svg"
    }
    useEffect(() => {
        function scroll() {
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                setMediaSorted((state: any) => state.concat(allMediaSorted.slice(state.length - 1, state.length + 4)))
            }

            if (allMediaSorted.length === mediaSorted.lednth) {
                window.removeEventListener('scroll', scroll)
            }
        }
        window.addEventListener('scroll', scroll)

        return () => { window.removeEventListener('scroll', scroll) }
    }, [])
    return (
        <>
            <div className="streamer_page__player">
                <div className="streamer_page__avatar">
                    <img src={`//d38ev7kpu49one.cloudfront.net/featured_streamers/${player.id}.png`} alt={`${player.name} avatar`} onError={error} />
                    <h1>{player.name}</h1>
                </div>
                <Table classNameProp="side" mediaSorted={mediaSorted} mediaById={clipsById} playersById={playersById} />
            </div>
        </>
    );
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        clipsSorted: state.mainReducer.clipsSorted.slice(0, 30),
        allMediaSorted: state.mainReducer.clipsSorted,
        clipsById: state.mainReducer.clipsById,
        playersById: state.mainReducer.playersById,
        player: state.mainReducer.currentPlayer
    }
}

const mapDispatchToProps = (dispatch: (arg0: any) => {}) => {
    return {
        onDelete: (id: any) => {
            dispatch(addVideosById(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoListPage)