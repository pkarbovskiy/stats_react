import React from 'react';
import logo from '../logo.svg';
import { topStreamers } from '../interfaces/interfaces'
import TopStreamers from '../components/TopSteamers';
import Table from '../components/Table';
import '../styles/App.scss';

const HomePage: React.FC = () => {
    const topStreamers: topStreamers = {
        "Symfuhny": {
            id: 3372,
            src: "http://streamsnipers.com/static/images/streamers/Symfuhny.png"
        },
        "Nickmercs": {
            id: 3337,
            src: "http://streamsnipers.com/static/images/streamers/Nickmercs.png"
        },
        "Dakotaz": {
            id: 3426,
            src: "http://streamsnipers.com/static/images/streamers/Dakotaz.png"
        },
        "Ninja": {
            id: 3150,
            src: "http://streamsnipers.com/static/images/streamers/Ninja.png"
        },
        "Myth": {
            id: 3429,
            src: "http://streamsnipers.com/static/images/streamers/Myth.png"
        }
    }
    return (
        <div className="home__page">
            <TopStreamers topStreamers={topStreamers} />
            <Table />
        </div>
    );
}

export default HomePage;
