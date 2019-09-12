import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo'

const Header: React.FC = () => {
    return (
        <header className="header">
            <Link to="/">
                <Logo />
            </Link>
            {/* <form action="" method="get">
                <input type="text" name="query" className="header__query" placeholder="Search by Epic name or Streamer name" />
                <input type="submit" value="submit" className="header__submit" />
            </form> */}
        </header>
    );
}

export default Header;