import React from 'react';
import logo from '../logo.svg';
import { topStreamers } from '../interfaces/interfaces'
import TopStreamers from '../component/TopSteamers';
import Table from '../component/Table';
import '../styles/App.scss';

const HomePage: React.FC = () => {
    const topStreamers: topStreamers = {
        "Symfuhny": {
            id: 3372,
            src: "http://streamsnipers.com:8000/static/images/streamers/Symfuhnyf.png"
        },
        "Nickmercs": {
            id: 3337,
            src: "http://streamsnipers.com:8000/static/images/streamers/Nickmercsf.png"
        },
        "Dakotaz": {
            id: 3426,
            src: "http://streamsnipers.com:8000/static/images/streamers/Dakotazf.png"
        },
        "Ninja": {
            id: 3150,
            src: "http://streamsnipers.com:8000/static/images/streamers/Ninjaf.png"
        },
        "Myth": {
            id: 3429,
            src: "http://streamsnipers.com:8000/static/images/streamers/Mythf.png"
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
