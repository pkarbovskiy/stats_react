import React from "react"
import Search from '../../components/Search'
import { Games } from '../../constants'
const ValorantHomePage = () => {
    return (
        <div className="val_home_page">
            <div className="val_home_page__search">
                <Search currentGame={Games.valorant} />
                <span className="val_home_page__search--text">Find all your streamer interactions</span>
            </div>
        </div>
    )
}
export default ValorantHomePage