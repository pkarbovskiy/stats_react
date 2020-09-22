import React from "react"
import { Link } from 'react-router-dom'

type Player = {
    player_name: string;
    player_id: number
}
//@todo add slug
//@todo add avatar
const SearchPlayer = ({ player_name, player_id }: Player) => {
    return (
        <Link className="search_player lg:px-16 p-6 py-8" to={`/lol/player/${player_id}`}>
            <p className="search_player__name">{player_name}</p>
        </Link>
    )
}
export default SearchPlayer