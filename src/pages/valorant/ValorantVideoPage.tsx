import React, { useEffect, useState } from 'react'
import TwitchPlayer from '../../components/valorant/TwitchPlayer'
import { ROOT_URL } from '../../constants'

const ValorantVideoPage = ({ match, onData, location }: { match: any; onData: any; location: any }) => {

    const searchString = location.search.replace('?', '').split('=')
    let name = ''
    if (searchString[0] === 'name') {
        name = decodeURI(searchString[1])
    }
    //get params from the url
    const { params: { matchId = 0, videoId } } = match
    // @todo check if this should be in uselayouteffect
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    const [events, setEvents] = useState<{ eventsById: any[], eventsInOrder: any[] }>()
    const [video, setVideo] = useState<any>()
    const [timer, setTimer] = useState<number>(0)

    useEffect(() => {
        setVideo(false)
        function getVideoInfo(videoId: number) {
            fetch(`${ROOT_URL}/api/valorant/video/${videoId}`)
                .then(data => data.json())
                .then(data => {
                    setEvents({
                        eventsById: data['matches'],
                        eventsInOrder: [matchId]
                    })
                    setVideo(data['video'])

                    if (data['matches'][matchId] == null) {
                        setTimer(0)
                        return
                    }
                    setTimer(data['matches'][matchId].match_start)
                })
        }
        // id is supposed to be int so | 0
        getVideoInfo(videoId | 0)

    }, [videoId, matchId])

    return (
        <div className="video_page">
            {video &&
                <TwitchPlayer {...video} targetElementId='twitchPlayer' autoplay={true} events={events} videoTime={timer | 0} currentMatch={matchId} currentPlayer={name} />
            }
        </div>
    )
}

export default ValorantVideoPage
