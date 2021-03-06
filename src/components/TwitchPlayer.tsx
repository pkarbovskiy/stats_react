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
    expired: boolean;
    deathKillTimers: any; //TODO: provide proper type
}
const EMBED_URL = 'https://player.twitch.tv/js/embed/v1.js';

const TwitchPlayer = ({ targetElementId, autoplay, videoId, videoTime = 0, deathKillTimers, expired }: Props) => {
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
            if (!expired) {
                setPlayer(new window.Twitch.Player(targetElementId, Object.assign({ autoplay, videoTime }, { video: videoId, parent: ["vodsearch.tv"] })))
            }
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
            {(!player && !expired) && <Loader />}
            {!expired &&
                <AutoSkip videoHandler={player} deathKillTimers={deathKillTimers} />
            }
            <div className="flex flex-col sm:flex-row">
                <div id={targetElementId} className={`player${expired ? ' include-oops-text' : ''}`}>{
                    expired && <p className="include-oops-text--text">
                        Oops, it looks like this video is no longer available on Twitch. They remove videos after a few weeks so please check back often so you don't miss anything!
                        </p>
                }</div>
                {!expired &&
                    <VideoNavigation videoHandler={player} deathKillTimers={deathKillTimers} />
                }
            </div>
        </>
    )
}

export default TwitchPlayer

