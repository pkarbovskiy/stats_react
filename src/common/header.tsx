import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <form action="" method="get">
                <input type="text" name="query" />
                <input type="submit" value="submit" />
            </form>
        </header>
    );
}

export default Header;