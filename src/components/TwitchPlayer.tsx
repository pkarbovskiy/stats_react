import React, { useEffect, useState } from 'react';
import DeathKill from './DeathKill'
import AutoSkip from './AutoSkip'
declare global {
    interface Window { Twitch: any; }
}
export type Props = {
    video: number;
    videoTime: number;
    targetElementId?: string;
    autoplay?: boolean;
    deathKillTimers: any; //TODO: provide proper type
}
const EMBED_URL = 'https://player.twitch.tv/js/embed/v1.js';

const TwitchPlayer = ({ targetElementId, autoplay, video, videoTime, deathKillTimers }: Props) => {
    const [player, setPlayer] = useState()
    useEffect(() => {
        if (window.Twitch && window.Twitch.Player) {
            createEmbedAddListeners();
            return;
        }

        const script = document.createElement('script');
        script.setAttribute('src', EMBED_URL);
        script.addEventListener('load', () => {
            createEmbedAddListeners();
        });
        document.body.appendChild(script);

        function createEmbedAddListeners() {
            setPlayer(new window.Twitch.Player(targetElementId, { autoplay, video, videoTime }))
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
            player.setVideo(`v${video}`, videoTime)
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
            <div id={targetElementId} className="player"></div>
            <DeathKill videoHandler={player} deathKillTimers={deathKillTimers} />
            <AutoSkip videoHandler={player} deathKillTimers={deathKillTimers} />
        </>
    )
}

export default TwitchPlayer

