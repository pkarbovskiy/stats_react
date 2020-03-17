import React from 'react'
import { gaEvents } from '../common_function'

const HighlightHelper = () => {
    return (
        <div className="high_helper">
            <h1>HighlightHelper</h1>
            <p className="high_helper__first_par">
                Save hours with HighlightHelper, a must have for Fortnite Twitch streamers and video editors.
                Our proprietary A.I. will automatically find all the events in your stream (wins, kills, deaths) and let you access them easily.
                <br />
                <br />
                <br />
                <span className="high_helper__first_par__cta">Try it for FREE for a limited time.</span>
            </p>
            <div className="high_helper__first_screen">
                <img src="//d38ev7kpu49one.cloudfront.net/static/monitor01.png" alt="initial screen" />
                <p className="high_helper__first_screen__claim">Making highlight videos has never been <span>so easy</span>.</p>
            </div>
            <div className="high_helper__second_screen">
                <img src="//d38ev7kpu49one.cloudfront.net/static/monitor02.png" alt="stats table" />
            </div>
            <p className="high_helper__second_par">
                <ul>
                    <li>Our A.I. scores each moment so all the best clips float to the top and grab your attention.</li>
                    <li>Find multi kills or squad wipes in seconds.</li>
                    <li>Click the links to watch the moment and clip it.</li>
                </ul>
                <a href="mailto:collaborations@vodsearch.tv?subject=I'd like to try out HighlightHelper!" onClick={() => gaEvents({ eventCategory: `LadingPage:click:email`, eventAction: 'click', eventLabel: 'landing:email:click' })}>Try For FREE</a>
            </p>
        </div>
    )
}

export default HighlightHelper