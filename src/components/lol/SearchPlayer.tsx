import React from "react"
import { Link } from 'react-router-dom'
import { gaEvents } from '../../common_function'

type Player = {
    player_name: string;
    player_id: number;
    slug?: string;
    gaEvent?: string;
}
//@todo add avatar
const SearchPlayer = ({ player_name, player_id, slug, gaEvent }: Player) => {
    return (
        <Link
            className="search_player lg:px-16 p-6 py-8"
            to={`/lol/player/${player_id}/${slug}`}
            onClick={() => gaEvents({ eventCategory: `${gaEvent}::Player Box`, eventAction: `player_id::${player_id}::${player_name}`, eventLabel: `player_id::${player_id}::${slug}` })}
        >
            <p className="search_player__name">{player_name}</p>
        </Link>
    )
}
export default SearchPlayer