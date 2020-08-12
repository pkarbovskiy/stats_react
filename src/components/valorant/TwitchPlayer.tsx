import React, { useEffect, useState } from 'react'
import Navigation from '../valorant/Navigation'
import Loader from '../../components/Loader'
declare global {
    interface Window { Twitch: any; }
}
//  @todo clean types
export type Props = {
    videoId: number;
    videoTime: number;
    targetElementId?: string;
    autoplay?: boolean;
    events: any;
    currentMatch: number;
    currentPlayer: string;
    video_streamer_id: number;
}
const EMBED_URL = 'https://player.twitch.tv/js/embed/v1.js';
// TODO add context for vidoe to get streamer info
const TwitchPlayer = ({ targetElementId, autoplay, videoId, videoTime = 0, events, currentMatch, currentPlayer, video_streamer_id }: Props) => {

    const buffer = 15
    videoTime = videoTime - buffer < 0 ? 0 : videoTime - buffer
    const [player, setPlayer] = useState<any>()
    useEffect(() => {
        if (window.Twitch && window.Twitch.Player) {
            createEmbedAddListeners()
            return
        }
        // adding script to the page
        const script = document.createElement('script')
        script.setAttribute('src', EMBED_URL)
        script.addEventListener('load', () => {
            createEmbedAddListeners()
        });
        document.body.appendChild(script)

        function createEmbedAddListeners() {
            setPlayer(new window.Twitch.Player(targetElementId, Object.assign({ autoplay, videoTime }, { video: videoId, parent: ['localhost'] })))
        }
    }, [])
    useEffect(() => {
        function seekAndPlay() {
            if (!player) {
                return
            }
            player.seek(videoTime)
            player.play()
        }

        if (player) {
            player.setVideo(`v${videoId}`, videoTime)
            player.addEventListener(window.Twitch.Player.READY, seekAndPlay)
        }
        return () => {
            if (!player) {
                return
            }
            player.removeEventListener(window.Twitch.Player.READY, seekAndPlay)
        }
    }, [player])

    return (
        <>
            {!player && <Loader />}
            {/* <AutoSkip videoHandler={player} deathKillTimers={deathKillTimers} /> */}
            <div className="flex flex-col lg:flex-row">
                <div id={targetElementId} className="player"></div>
                <Navigation videoHandler={player} events={events} currentMatch={currentMatch} currentPlayer={currentPlayer} streamerId={video_streamer_id} />
            </div>
        </>
    )
}

export default TwitchPlayer

