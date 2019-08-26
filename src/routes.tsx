import React from 'react';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';
import Header from './common/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Routing() {
    return (
        <Router>
            <Header />
            <main>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/video" component={VideoPage} />
            </main>
        </Router>
    )
}