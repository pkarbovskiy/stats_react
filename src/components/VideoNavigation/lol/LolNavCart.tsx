import React from "react"
import { cloudFrontUrl } from '../../../constants'
//@todo create and champion enum
type StatsValorant = {
    champion1: string;
    player_name1: string;
    player_id1: number;

    champion2: string;
    player_name2: string;
    player_id2: number;

    timestamp: number
    streamerId: number;
    stat_id?: number;

    seekTime: Function
}
const ValorantNavCart = ({ champion1, player_name1, champion2, player_name2, player_id2, player_id1, streamerId, timestamp, seekTime }: StatsValorant) => {
    return (
        <div className={`val_nav_cart ${player_id1 === streamerId || player_id2 === streamerId ? 'streamer' : ''}`} onClick={seekTime.bind(null, timestamp)}>
            <img className="val_nav_cart__player1" alt={champion1} src={`${cloudFrontUrl}/static/champions/${champion1.replace("'", '').replace(' ', '')}.png`} />
            <span >{`${player_name1} vs ${player_name2}`}</span>
            <img className="val_nav_cart__player2" alt={champion2} src={`${cloudFrontUrl}/static/champions/${champion2.replace("'", '').replace(' ', '')}.png`} />
        </div>
    )
}
export default ValorantNavCart