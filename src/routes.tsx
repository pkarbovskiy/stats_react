import React from 'react'
import HomePage from './pages/HomePage'

import VideoPage from './pages/VideoPage'
import {TwitchPlayerOptions } from './components/TwitchPlayer'
import { Events } from './components/Timeline'
import Header from './common/header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'

type StoreTypes = {
    timeline: Events;
    twitchPlayer: TwitchPlayerOptions;
}

const Root: React.FC<{store:any}> = ({store}:{store:any}) => (
    <Provider store={store}>
        <Router>
            <Header />
            <main>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/video" component={VideoPage} />
            </main>
        </Router>
    </Provider>
)

export default Root