import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const index = 1;
    return (
        <header className="header">
            <Link to="/">
                {index ? <img src="" /> : <img src="" />}
            </Link>
            <form action="" method="get">
                <input type="text" name="query" className="header__query" placeholder="Search by Epic name or Streamer name" />
                <input type="submit" value="submit" className="header__submit" />
            </form>
        </header>
    );
}

export default Header;