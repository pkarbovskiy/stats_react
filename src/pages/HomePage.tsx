import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalState } from '../routes'
import { Games, ActionTypes } from '../constants'

const HomePage = () => {
    const { dispatchGlobStateAction } = useContext(GlobalState)
    function handleClick(game: Games) {
        if (Games[game] != null) {
            dispatchGlobStateAction({ type: ActionTypes.setCurentGame, payload: game })
        }
    }
    // function cancelClick(event: MouseEvent<HTMLAnchorElement>) {
    //     event.preventDefault()
    // }
    return (
        <div className="main_home_page">
            <h3 className="main_home_page__header">Choose your game, find all your streamer interactions</h3>
            <div className="main_home_page__games">
                <Link to='/valorant/' className="main_home_page__games__link valorant" onClick={handleClick.bind(null, Games.valorant)}>
                    <img src={`https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-500x666.jpg`} alt="valorant" />
                </Link>
                <Link to='/fortnite/' className="main_home_page__games__link fortnite" onClick={handleClick.bind(null, Games.fortnite)}>
                    <img src={`https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-500x666.jpg`} alt="fortnite" />
                </Link>
                <Link to='/lol/' className="main_home_page__games__link lol" onClick={handleClick.bind(null, Games.lol)}>
                    <img src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-500x666.jpg" alt="league of legends" />
                </Link>

            </div>
        </div>
    )
}
export default HomePage