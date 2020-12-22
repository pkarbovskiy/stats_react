import React, { useState, MouseEvent, useEffect, ElementType } from "react"

type Props = {
    eventsInOrder: any,
    eventsById: any,
    currentMatch: number,
    currentPlayer: string,
    streamerId: number,
    player: any,
    startTimeProperty: string,
    Header: ElementType<{ event: any, toggleMatch: Function, isClosed: boolean }>,
    VideoCart: ElementType<any>
}
//TODO add type for stats
const Navigation = ({ eventsInOrder, eventsById, player, currentMatch = 0, currentPlayer, streamerId, Header, VideoCart, startTimeProperty }: Props) => {

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

        if (!player) {
            return
        }

        if (!player.isPaused()) {
            player.seek(time)
            return
        }

        player.play()
        //try to space it out, otherwise it doesn't work
        setTimeout(() => { player.seek(time) }, 50)
    }
    if (Object.keys(eventsById).length === 0) {
        return <></>
    }
    return (
        <nav className="video_nav overflow-x-hidden">
            <dl className="video_nav__main_list w-full">
                {eventsInOrder?.length > 0 &&
                    eventsInOrder.map((entityId: number, index: number) =>
                        eventsById[entityId] &&
                        <>
                            <dt
                                key={entityId}
                                onClick={seekTime.bind(null, eventsById[entityId][startTimeProperty])}
                                className="justify-between"
                            >
                                <Header
                                    event={eventsById[entityId]}
                                    toggleMatch={toggleMatch.bind(null, entityId)}
                                    isClosed={!matchesShown[entityId]}
                                />
                            </dt>
                            <div>
                                {matchesShown[entityId] &&
                                    eventsById[entityId]?.stats.length > 0 &&
                                    eventsById[entityId]?.stats
                                        .filter((stat: any) =>
                                            currentPlayer === '' ||
                                            currentPlayer === stat.player_name1 ||
                                            currentPlayer === stat.player_name2 ||
                                            currentPlayer === stat.player_name || stat.action_id === 13
                                        )
                                        .map((stat: any) =>
                                            <dd key={stat.stats_id}>
                                                <VideoCart {...stat} streamerId={streamerId} seekTime={seekTime} />
                                            </dd>
                                        )
                                }
                            </div>
                        </>
                    )
                }
            </dl>
        </nav>
    )
}
export default Navigation