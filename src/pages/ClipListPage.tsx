import React, { useEffect, useState, useMemo, useRef } from 'react'
import { connect } from 'react-redux'
import { addVideosById } from '../actions'
import { State } from '../reducers/reducers'
import Table from '../components/Table'
import { gaEvents, shouldLazyLoad } from '../common_function'
declare global {
    interface Window { body: any; }
}
const VideoListPage = ({ player, playersById, clipsById, clipsSorted, allMediaSorted, match }: any) => {
    const [mediaSorted, setMediaSorted] = useState(clipsSorted)
    const currAction: any = useRef('all')
    const initialAmount = clipsSorted.length
    /**
     * split all events by action and keep them in the same order
     * @param { entitySorted, entityById } entity which consists of just ids in array and dictionary
     * @returns object like { [action: string]: number[] }
     */
    function splitByAction({ entitySorted, entityById }: { entitySorted: any; entityById: any }): { [action: string]: number[] } {
        return entitySorted.reduce((acc: { [action: string]: number[] }, id: number) => {

            if (!entityById[id]) {
                return acc
            }

            if (!acc[entityById[id].action]) {
                acc[entityById[id].action] = []
            }

            acc[entityById[id].action].push(id)
            acc.all.push(id)

            return acc
        }, { all: [] })
    }
    // using memo to not to recalculate
    // memo is used to momoize results, useCallback can be used as well
    const idsForActions = useMemo(
        () => splitByAction({ entitySorted: allMediaSorted, entityById: clipsById }),
        [
            allMediaSorted,
            clipsById
        ]
    )

    function sortByAction(action: string): void {
        gaEvents({ eventCategory: 'ClipList Page', eventAction: 'click', eventLabel: `${action}` })
        currAction.current = action
        // setting what actions we need to see
        setMediaSorted(idsForActions[action].slice(0, initialAmount))
    }
    useEffect(() => {
        function scroll() {
            if (shouldLazyLoad()) {
                setMediaSorted((state: any) => idsForActions[currAction.current].slice(0, state.length + 4))
            }
        }
        window.addEventListener('scroll', scroll)

        return () => { window.removeEventListener('scroll', scroll) }
    }, [])
    return (
        <>
            <div className="streamer_page__player">
                <div className="flex flex-wrap streamer_page__player__filters">
                    <button className={`${currAction.current === 'all' ? 'active' : ''} block uppercase  mr-2 mb-2 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded`} onClick={() => sortByAction('all')}>All</button>
                    <button className={`${currAction.current === 'eliminatedby' ? 'active' : ''} block uppercase  mr-2 mb-2 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded`} onClick={() => sortByAction('eliminatedby')}>Eliminated By</button>
                    <button className={`${currAction.current === 'eliminated' ? 'active' : ''} block uppercase  mr-2 mb-2 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded`} onClick={() => sortByAction('eliminated')}>Eliminated</button>
                    <button className={`${currAction.current === 'victory' ? 'active' : ''} block uppercase  mr-2 mb-2 shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded`} onClick={() => sortByAction('victory')}>Victory</button>
                </div>
                <Table classNameProp={['side', 'horisontal', 'clips']} mediaSorted={mediaSorted} mediaById={clipsById} playersById={playersById} />
            </div>
        </>
    );
}

const mapStateToProps = (state: { mainReducer: State }) => {
    return {
        clipsSorted: state.mainReducer.clipsSorted.slice(0, 42),
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
function areEqual(prevProps: any, nextProps: any) {
    return prevProps.match.url === nextProps.match.url
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(VideoListPage, areEqual))