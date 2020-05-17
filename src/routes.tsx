import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import HighlightHelper from './pages/HighlightHelper'
import VideoPage from './pages/VideoPage'
import StreamerPage from './pages/StreamerPage'
import SearchPage from './pages/SearchPage'
import VideoListPage from './pages/VideoListPage'
import Header from './common/header'
import { Router, Route, NavLink, Link } from 'react-router-dom'
import HamburgerMenu from './components/HamburgerMenu'
import HumbuergerLogo from './components/HamburgerLogo'
import CookieConsent from 'react-cookie-consent'
import StreamerMix from './components/StreamerMix'
import SocialMediaLinks from './components/SocialMediaLinks'
import { gaEvents } from './common_function'
import { createBrowserHistory } from "history"

import { Provider } from 'react-redux'
import PrivacyPolicyLinks from './components/PrivacyPolicyLinks'

const Root = ({ store }: { store: any }) => {
    const [isMenuShown, toggleMenu] = useState(true)
    const history = createBrowserHistory()
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header toggleMenu={toggleMenu} />
                <aside className="sidebar">
                    <StreamerMix />
                </aside>
                {/* <HamburgerMenu isMenuShown={isMenuShown} toggleMenu={toggleMenu}>
                     <HumbuergerLogo toggleMenu={toggleMenu} noHomeLink={true} />                   
                    <hr />                    
                </HamburgerMenu> */}
                <main className={navigator.userAgent.toLowerCase().match(/mobile/i) ? 'mobile' : ''}>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/all_videos" component={VideoListPage} />
                    <Route exact path="/random_video" render={(props) => (<VideoPage {...props} key={Math.random()} />)} />
                    <Route exact path="/video/:videoId" component={VideoPage} />
                    <Route exact path="/video/:videoId/timer/:timer" component={VideoPage} />
                    <Route path="/player/:playerId/:slug" component={StreamerPage} />
                    <Route exact path="/random_streamer" render={(props) => (<StreamerPage {...props} key={Math.random()} />)} />
                    <Route exact path="/featured_streamers" component={StreamerPage} />
                    <Route exact path="/search" component={SearchPage} />
                    <Route exact path="/about_us" component={InfoPage} />
                    <Route exact path="/info" component={InfoPage} />
                    <Route exact path="/privacy" component={InfoPage} />
                    <Route exact path="/terms_of_service" component={InfoPage} />
                    <Route exact path="/highlighthelper" component={HighlightHelper} />

                </main>
                <footer className="main_footer">
                    <SocialMediaLinks />
                    <div className="flex justify-center w-full my-4">
                        <PrivacyPolicyLinks />
                    </div>
                    <span className="all_rights_reserved">© {new Date().getFullYear()} VodSearchTV. All rights reserved.</span>
                </footer>
                <CookieConsent location="bottom" style={{ opacity: 0.9 }} onAccept={() => { }}>
                    <span style={{ fontSize: "20px" }}>
                        We use technical and analytics cookies to enhance your user experience.
                        For more info refer to our <a href="/privacy">Privacy Policy.</a>
                    </span>
                </CookieConsent>
            </Router>
        </Provider>
    )
}

export default Root