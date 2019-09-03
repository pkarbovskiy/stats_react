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
        "Myth": 3429,
        "SypherPk": 3372,
        "Daequan": 3337,
        "Bugha": 3426,
        "Chap": 3150,
        "Cloakzy": 3429,
        "CDNThe3rd": 3372,
        "DrLupo": 3337,
        "MrFreshAsian": 3426,
        "Aydan": 3150,
        "BrookeAB": 3429,
        "TSM_Hamlinz": 3429,
        "Loeya": 3429,
        "AlexRamiGaming": 3429,
    }
    return (
        <div className="home__page">
            <TopStreamers topStreamers={topStreamers} />
            <Table />
        </div>
    );
}

export default HomePage;
