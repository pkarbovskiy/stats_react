import React, { useState, useEffect, useMemo } from "react"
import Loader from '../../components/Loader'
import Avatar from '../../components/Avatar'
import { shouldLazyLoad } from '../../common_function'
import { ROOT_URL } from '../../constants'
import ValorantTable from '../../components/valorant/Table'
import StreamersList from '../../components/valorant/StreamersList'

//api/valorant/player/<int:id>
//@todo set proper type for match
const ValorantPlayerPage = ({ match }: any) => {
    //@todo set proper type
    const [streamer, setStreamer] = useState<any>({})
    const [streamers, setStreamers] = useState<any[]>([])
    const [matches, setMatches] = useState<any>({})
    const [matchesShown, setMatchesShown] = useState<any[]>([])
    const [streamersFiltered, setStreamerFiltered] =
        useState<{ memo: { [key: string]: [] }, currentlySet: { [key: number]: boolean } }>({ memo: {}, currentlySet: {} })

    function filterResults(id: number) {

        if (streamersFiltered.currentlySet[id]) {
            delete streamersFiltered.currentlySet[id]
            const allKeys = Object.keys(streamersFiltered.currentlySet)
            if (allKeys.length === 0) {
                if (streamersFiltered.memo['all'] == null) {
                    streamersFiltered.memo['all'] = matches.matchesSortedByDate.map((id: number) => matches.matches[id])
                }
                setMatchesShown(streamersFiltered.memo['all'])
                setStreamerFiltered(streamersFiltered)
                return
            }
        } else {
            streamersFiltered.currentlySet[id] = true
        }

        const allKeys = Object.keys(streamersFiltered.currentlySet)

        allKeys.sort((a, b) => +a - +b)

        if (streamersFiltered.memo[allKeys.join(':')] == null) {
            streamersFiltered.memo[allKeys.join(':')] = matches.matchesSortedByDate.reduce((acc: any, val: any) => {

                const match = matches.matches[val]

                if (streamersFiltered.currentlySet[match.streamer_id]) {
                    acc.push(match)
                }

                return acc
            }, [])

            if (streamersFiltered.memo[id] == null) {
                streamersFiltered.memo[id] = matches.matchesSortedByDate.reduce((acc: any, val: any) => {

                    const match = matches.matches[val]

                    if (match.streamer_id === id) {
                        acc.push(match)
                    }

                    return acc
                }, [])
            }

            setStreamerFiltered(streamersFiltered)
        }
        setMatchesShown(streamersFiltered.memo[allKeys.join(':')])
    }

    useEffect(() => {
        function getPlayer(playerId: number) {
            fetch(`${ROOT_URL}/api/valorant/player/${playerId | 0}`)
                .then(data => data.json())
                .then(data => {
                    setStreamer(data.player)
                    setMatches(data)
                    setStreamers(data.streamers)
                    setMatchesShown(data.matchesSortedByDate.map((id: number) => data.matches[id]))
                })
        }
        getPlayer(match.params.playerId | 0)
        setStreamer(false)
    }, [match.params.playerId])

    useEffect(() => {
        function scroll() {
            if (shouldLazyLoad()) {
                //setMediaSorted((state: any) => state.concat(allMediaSorted.slice(state.length - 1, state.length + 10)))
            }
        }
        window.addEventListener('scroll', scroll)

        return () => { window.removeEventListener('scroll', scroll) }
    }, [])

    const streamersList = Object.keys(streamers).map((key: any) => streamers[key])
    return (
        <div className="streamer_page_val">
            {!streamer && <Loader />}
            {streamer &&
                <>
                    <div className="p-6 streamer_page__player lg:px-16">
                        <div className="mb-6 streamer_page__avatar">
                            <Avatar player={streamer} />
                            <div className={'text-primary-500 text-2xl font-bold'}>{streamer.name}</div>
                        </div>
                    </div>
                    <StreamersList streamersList={streamersList} elementClicked={filterResults} currentlyActive={streamersFiltered.currentlySet} />
                    <p className="streamer_page__all_matches text-black py-2 sm:p-6 lg:px-16">
                        ALL MATCHES
                </p>
                    {matchesShown?.length > 0 &&
                        <ValorantTable matches={matchesShown} streamers={matches.streamers} currentPlayer={streamer.name} />
                    }
                </>
            }
        </div >
    )
}
export default ValorantPlayerPage