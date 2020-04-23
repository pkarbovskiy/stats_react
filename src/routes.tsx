import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import HighlightHelper from './pages/HighlightHelper'
import VideoPage from './pages/VideoPage'
import StreamerPage from './pages/StreamerPage'
import SearchPage from './pages/SearchPage'
import VideoListPage from './pages/VideoListPage'
import SidebarHeader from './common/SidebarHeader'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import HamburgerMenu from './components/HamburgerMenu'
import HumbuergerLogo from './components/HamburgerLogo'
import CookieConsent from "react-cookie-consent";
import { gaEvents } from './common_function'

import { Provider } from 'react-redux'

const Root = ({ store }: { store: any }) => {
    const [isMenuShown, toggleMenu] = useState(false)
    return (
        <Provider store={store}>
            <Router>
                {/*

                    Hamburger menu is being replaced by "Sidebar" ----------------------------------
                  <Header toggleMenu={toggleMenu} />
                  
                <HamburgerMenu isMenuShown={isMenuShown} toggleMenu={toggleMenu}>
                    <HumbuergerLogo toggleMenu={toggleMenu} noHomeLink={true} />
                    <NavLink exact activeClassName={"active"} to="/" className="link">
                        <svg viewBox="0 0 576 512">
                            <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                            </path>
                        </svg>
                        <span>Home</span>
                    </NavLink>
                    <hr />
                    <NavLink activeClassName={"active"} to="/highlighthelper" className="link">
                        <svg viewBox="0 0 512 512">
                            <path d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm384 192c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z">
                            </path>
                        </svg>
                        <span>Highlight Helper</span>
                    </NavLink>
                    <NavLink activeClassName={"active"} to="/random_video" className="link">
                        <svg viewBox="0 0 512 512">
                            <path d="M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z">
                            </path>
                        </svg>
                        <span>Random Video</span>
                    </NavLink>
                    <hr />
                    <NavLink activeClassName={"active"} to="/random_streamer" className="link">
                        <svg viewBox="0 0 448 512">
                            <path d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z">
                            </path>
                        </svg>
                        <span>Random Streamers</span>
                    </NavLink>
                     <NavLink activeClassName={"active"} to="/featured_streamers" className="link">
                        <svg viewBox="0 0 448 512">
                            <path d="M325.4 289.2L224 390.6 122.6 289.2C54 295.3 0 352.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-70.2-54-127.1-122.6-133.2zM32 192c27.3 0 51.8-11.5 69.2-29.7 15.1 53.9 64 93.7 122.8 93.7 70.7 0 128-57.3 128-128S294.7 0 224 0c-50.4 0-93.6 29.4-114.5 71.8C92.1 47.8 64 32 32 32c0 33.4 17.1 62.8 43.1 80-26 17.2-43.1 46.6-43.1 80zm144-96h96c17.7 0 32 14.3 32 32H144c0-17.7 14.3-32 32-32z">
                            </path>
                        </svg>
                        <span>Featured Streamers</span>
                    </NavLink> 
                    <hr />
                    <a href="https://twitter.com/VODsearchtv/" className="link" target="_blank" rel="noopener noreferrer nofollow" onClick-={() => gaEvents({ eventCategory: `Twitter link sidebar clicked`, eventAction: 'click', eventLabel: `click` })}>
                        <svg viewBox="0 0 512 512">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                            </path>
                        </svg>
                        <span>Twitter</span>
                    </a>
                    <a href="https://www.reddit.com/r/VODsearch" className="link" target="_blank" rel="noopener noreferrer nofollow" onClick-={() => gaEvents({ eventCategory: `Reddit link sidebar clicked`, eventAction: 'click', eventLabel: `click` })}>
                        <svg viewBox="0 0 512 512">
                            <path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z">
                            </path>
                        </svg>
                        <span>Reddit</span>
                    </a>
                    <a href="https://www.twitch.tv/vodsearch/" className="link" target="_blank" rel="noopener noreferrer nofollow" onClick-={() => gaEvents({ eventCategory: `Twitch link sidebar clicked`, eventAction: 'click', eventLabel: `click` })}>
                        <svg viewBox="0 0 512 512">
                            <path d="M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z">
                            </path>
                        </svg>
                        <span>Twitch</span>
                    </a>
                    <hr />
                    <Link to="/privacy" className="info">
                        <span>Privacy Policy</span>
                    </Link>
                    <Link to="/terms_of_service" className="info">
                        <span>Terms Of Service</span>
                    </Link>
                    <Link to="/about_us" className="info">
                        <span>About Us</span>
                    </Link>
                </HamburgerMenu>  */}
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
                <CookieConsent style={{ opacity: "0.7" }} location="bottom" containerClasses='bg-primary-900' buttonStyle={{ background: '#eaeaea', borderRadius: "5px", boxShadow: "0px 23px 36px rgb(252, 249, 241, 0.06)", margin: "0 auto" }} buttonClasses='rounded bg-primary-800' onAccept={() => { }}>
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