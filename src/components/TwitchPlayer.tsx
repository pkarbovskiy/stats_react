import React, { useEffect, useState } from 'react';
import VideoNavigation from './VideoNavigation'
import Loader from '../components/Loader'
import AutoSkip from './AutoSkip'
declare global {
    interface Window { Twitch: any; }
}
export type Props = {
    videoId: number;
    videoTime: number;
    targetElementId?: string;
    autoplay?: boolean;
    deathKillTimers: any; //TODO: provide proper type
}
const EMBED_URL = 'https://player.twitch.tv/js/embed/v1.js';

const TwitchPlayer = ({ targetElementId, autoplay, videoId, videoTime = 0, deathKillTimers }: Props) => {
    const buffer = 15
    videoTime = videoTime - buffer < 0 ? 0 : videoTime - buffer
    const [player, setPlayer] = useState<any>()
    useEffect(() => {
        if (window.Twitch && window.Twitch.Player) {
            createEmbedAddListeners()
            return
        }

        const script = document.createElement('script')
        script.setAttribute('src', EMBED_URL)
        script.addEventListener('load', () => {
            createEmbedAddListeners()
        });
        document.body.appendChild(script)

        function createEmbedAddListeners() {
            setPlayer(new window.Twitch.Player(targetElementId, { autoplay, videoId, videoTime }))
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
            <AutoSkip videoHandler={player} deathKillTimers={deathKillTimers} />
            <div className="player_and_nav">

                <div id={targetElementId} className="player"></div>
                <VideoNavigation videoHandler={player} deathKillTimers={deathKillTimers} />
            </div>
        </>
    )
}

export default TwitchPlayer

