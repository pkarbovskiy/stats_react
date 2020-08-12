import React, { useState, MouseEvent, useEffect } from "react"
import { cloudFrontUrl } from '../../constants'
import { convertToStandartTimeOutput } from '../../common_function'
//TODO add type for stats
const Navigation = ({ videoHandler, events, currentMatch = 0, currentPlayer, streamerId }: { videoHandler: any, events: any, currentMatch: number, currentPlayer: string, streamerId: number }) => {
    const [matchesShown, setMatchesShown] = useState<{ [key: number]: boolean }>({})


    function toggleMatch(matchId: number, event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        event.stopPropagation()

        setMatchesShown(state => ({ ...state, [matchId]: !!!state[matchId] }))
    }
    useEffect(() => {
        if (currentMatch !== 0) {
            setMatchesShown(state => ({ ...state, [currentMatch]: true }))
        }
    }, [currentMatch])

    function seekTime(time: number, event: MouseEvent) {


        if (!videoHandler.isPaused()) {
            videoHandler.seek(time)
            return
        }

        videoHandler.play()
        //try to pad it
        setTimeout(() => { videoHandler.seek(time) }, 50)
    }
    return (
        <nav className="video_nav overflow-x-hidden">
            <dl className="video_nav__main_list w-full">
                {events.eventsInOrder?.length > 0 &&
                    events.eventsInOrder.map((matchId: number, index: number) =>
                        <>
                            <dt
                                key={matchId}
                                onClick={seekTime.bind(null, events.eventsById[matchId].match_start)}
                                data-match={matchId}
                                className="justify-between"
                            >
                                <div data-time={events.eventsById[matchId].match_start} className="flex flex-row md">
                                    <span data-time={events.eventsById[matchId].match_start}>{index + 1}</span>
                                    {convertToStandartTimeOutput(events.eventsById[matchId].match_end - events.eventsById[matchId].match_start)}
                                </div>
                                <button data-match={matchId} onClick={toggleMatch.bind(null, matchId)} className={`mr-2 ${matchesShown[matchId] ? '' : 'closed'}`}>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="36" y="36" width="36" height="36" rx="8" transform="rotate(-180 36 36)" fill="#E5E7FA" />
                                        <path d="M22.5723 15L24 16.4218L18 22.4218L12 16.4218L13.4277 15L18 19.5723L22.5723 15Z" fill="#666FE4" />
                                    </svg>
                                </button>
                            </dt>
                            {matchesShown[matchId] &&
                                <div data-match={matchId}>
                                    {events.eventsById[matchId]?.stats.length > 0 &&
                                        events.eventsById[matchId]?.stats
                                            .filter((stat: any) => currentPlayer === '' || currentPlayer === stat.player_name1 || currentPlayer === stat.player_name2)
                                            .map((stat: any) =>
                                                <dd key={stat.stats_id} onClick={seekTime.bind(null, stat.timestamp)} className={stat.player_id1 === streamerId || stat.player_id2 === streamerId ? 'streamer' : ''}>
                                                    <img className="player1" alt={stat.agent1} src={`${cloudFrontUrl}/static/agents/${stat.agent1}.png`} />
                                                    <span >{`${stat.player_name1} vs ${stat.player_name2}`} </span>
                                                    <img className="player2" alt={stat.agent2} src={`${cloudFrontUrl}/static/agents/${stat.agent2}.png`} />
                                                </dd>
                                            )
                                    }
                                </div>
                            }
                        </>
                    )
                }
            </dl>
        </nav>
    )
}
export default Navigation