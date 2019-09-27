import React from 'react'
import HomePage from './pages/HomePage'

import VideoPage from './pages/VideoPage'
import StreamerPage from './pages/StreamerPage'
import Header from './common/header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'

const Root: React.FC<{ store: any }> = ({ store }: { store: any }) => (
    <Provider store={store}>
        <Router>
            <Header />
            <main>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/video/:videoId/clip/:clipId" component={VideoPage} />
                <Route exact path="/random_video" component={VideoPage} />
                <Route exact path="/all_videos" component={VideoPage} />
                <Route exact path="/player/:playerId/:slug" component={StreamerPage} />
            </main>
        </Router>
    </Provider>
)

export default Root