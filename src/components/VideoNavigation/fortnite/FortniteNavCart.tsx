import React from "react"
import { cloudFrontUrl } from '../../../constants'
//@todo create and agent enum
type StatsValorant = {
    stat_id?: number;
    player_name: string;
    player_id: number;
    streamer_name: string;
    video_streamer_id: number;
    timestamp: number;

    seekTime: Function
}
const FortniteNavCart = ({
    player_name,
    player_id,
    streamer_name,
    video_streamer_id,
    timestamp,
    seekTime
}: StatsValorant) => {
    return (
        <div className={`fontnite_nav_cart`} onClick={seekTime.bind(null, timestamp)}>
            <span >{`${streamer_name} vs ${player_name}`}</span>
        </div>
    )
}
export default FortniteNavCart