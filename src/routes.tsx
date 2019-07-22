import React from 'react';
import Home from './pages/Home';
import Header from './common/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function Routing() {
    return (
        <Router>
            <Header />
            <Route exact path="/" component={Home} />
        </Router>
    )
}