import React, { useState, createContext, useReducer } from 'react'
import InfoPage from './pages/InfoPage'
import HighlightHelper from './pages/HighlightHelper'
import VideoPage from './pages/VideoPage'
import StreamerPage from './pages/StreamerPage'
import SearchPage from './pages/SearchPage'
import VideoListPage from './pages/VideoListPage'

import FortniteHomePage from './pages/fortnite/HomePage'
import HomePage from './pages/HomePage'

import ValorantSearchPage from './pages/valorant/ValorantSearchPage'
import ValorantPlayerPage from './pages/valorant/ValorantPlayerPage'
import ValorantVideoPage from './pages/valorant/ValorantVideoPage'
import ValorantHomePage from './pages/valorant/ValorantHomePage'

import LolSearchPage from './pages/lol/LolSearchPage'
import LolPlayerPage from './pages/lol/LolPlayerPage'
import LolVideoPage from './pages/lol/LolVideoPage'
import LolHomePage from './pages/lol/LolHomePage'

import Header from './common/header'
import StreamerMix from './components/StreamerMix'
import SocialMediaLinks from './components/SocialMediaLinks'
import PrivacyPolicyLinks from './components/PrivacyPolicyLinks'

import { Games, ActionTypes } from './constants'
import { gaPageView } from './common_function'

import CookieConsent from 'react-cookie-consent'
import { Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from "history"
import { Provider } from 'react-redux'

type globalContext = {
    isAuthenticated: boolean,
    currentGame: Games,
    dispatchGlobStateAction: Function
}

const INITIAL_VALUE: globalContext = {
    isAuthenticated: false,
    currentGame: Games.fortnite,
    dispatchGlobStateAction: function () { }
}

function reducer(state: Partial<globalContext>, action: { type: string, payload?: any }) {
    switch (action.type) {
        case ActionTypes.setAutenticated:
            if (action.payload != null) {
                localStorage.setItem('token', action.payload)
                return Object.assign({}, state, { isAuthenticated: true })
            }
            localStorage.removeItem('token')
            return Object.assign({}, state, { isAuthenticated: false })
        case ActionTypes.setCurentGame:
            if (action.payload && Games[action.payload as Games] != null) {
                if (state.currentGame !== action.payload) {
                    return Object.assign({}, state, { currentGame: action.payload })
                }
            }
            return state
        default:
            throw new Error()
    }
}

//@todo move this to separate file
export const GlobalState = createContext<globalContext>(INITIAL_VALUE)

function updateInitValue(initialState: globalContext): globalContext {
    const copyOfState = Object.assign({}, initialState)

    const splitLocation = window.location.pathname.split('/')

    copyOfState.currentGame = Games.valorant

    if (Games[splitLocation[1] as Games] != null) {
        copyOfState.currentGame = Games[splitLocation[1] as Games]
    }

    copyOfState.isAuthenticated = localStorage.getItem('token') ? true : false

    return copyOfState
}
// to prevent routes failure when reducer used
//@todo keep an eye on can be weird
const history = createBrowserHistory()

const Root = ({ store }: { store: any }) => {

    const [isMenuShown, toggleMenu] = useState<boolean>(true)
    const updatedInitValues = updateInitValue(INITIAL_VALUE)
    const [state, dispatchGlobStateAction] = useReducer(reducer, updatedInitValues)

    // @todo add async load of user info

    history.listen((location) => {
        gaPageView(`${location.pathname}${location.search}`)
    })

    function handleAuthentication(token: string | null) {
        dispatchGlobStateAction({ type: ActionTypes.setAutenticated, payload: token })
    }

    return (
        <Provider store={store}>
            <Router history={history}>
                <GlobalState.Provider value={{ ...state, dispatchGlobStateAction } as globalContext} >
                    <Header toggleMenu={toggleMenu} handleAuthentication={handleAuthentication} />
                    <aside className="sidebar">
                        {state.currentGame === Games.fortnite && <StreamerMix />}
                    </aside>
                    <main className={navigator.userAgent.toLowerCase().match(/mobile/i) ? 'mobile' : ''}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />

                            <Route exact path="/highlighthelper" component={HighlightHelper} />
                            <Route exact path="/about_us" component={InfoPage} />
                            <Route exact path="/info" component={InfoPage} />
                            <Route exact path="/privacy" component={InfoPage} />
                            <Route exact path="/terms_of_service" component={InfoPage} />

                            <Route exact path="/fortnite/" component={FortniteHomePage} />
                            <Route exact path="/fortnite/video/:videoId" component={VideoPage} />
                            <Route exact path="/fortnite/video/:videoId/timer/:timer" component={VideoPage} />
                            <Route path="/fortnite/player/:playerId/:slug" component={StreamerPage} />
                            <Route exact path="/fortnite/search" component={SearchPage} />

                            <Route exact path="/valorant/" component={ValorantHomePage} />
                            <Route exact path="/valorant/video/:videoId" component={ValorantVideoPage} />
                            <Route exact path="/valorant/video/:videoId/match/:matchId" component={ValorantVideoPage} />
                            {/* @todo add slug */}
                            <Route path="/valorant/player/:playerId" component={ValorantPlayerPage} />
                            <Route exact path="/valorant/search" component={ValorantSearchPage} />

                            <Route exact path="/lol/" component={LolHomePage} />
                            <Route exact path="/lol/video/:videoId" component={LolVideoPage} />
                            <Route exact path="/lol/video/:videoId/match/:matchId" component={LolVideoPage} />
                            {/* @todo add slug */}
                            <Route path="/lol/player/:playerId" component={LolPlayerPage} />
                            <Route exact path="/lol/search" component={LolSearchPage} />

                        </Switch>
                    </main>
                    <footer className="main_footer">
                        <SocialMediaLinks />
                        <div className="flex justify-center w-full my-4">
                            <PrivacyPolicyLinks />
                        </div>
                        <span className="all_rights_reserved">© {new Date().getFullYear()} VodSearchTV. All rights reserved.</span>
                        <span className="not_riot">VODsearch.tv isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</span>
                    </footer>
                    <CookieConsent location="bottom" style={{ opacity: 0.9 }} onAccept={() => { }}>
                        <span style={{ fontSize: "20px" }}>
                            We use technical and analytics cookies to enhance your user experience.
                        For more info refer to our <a href="/privacy">Privacy Policy.</a>
                        </span>
                    </CookieConsent>
                </GlobalState.Provider>
            </Router>
        </Provider>
    )
}

export default Root