import React from 'react';
import logo from '../logo.svg';
import { topStreamers } from '../interfaces/interfaces'
import TopStreamers from '../components/TopSteamers';
import Table from '../components/Table';
import '../styles/App.scss';

const HomePage: React.FC = () => {
    const topStreamers = {
        "Symfuhny": 3372,
        "Nickmercs": 3337,
        "Dakotaz": 3426,
        "Ninja": 3150,
        "Myth": 3429
    }
    return (
        <div className="home__page">
            <TopStreamers topStreamers={topStreamers} />
            <Table />
        </div>
    );
}

export default HomePage;
