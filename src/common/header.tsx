import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import Logo from './logo'


const Header = ({toggleMenu}: {toggleMenu: (arg0:any) => void}) => {
    return (
        <header className="header">
             <button className="main-nav__ham_menu" onClick={() => toggleMenu((showMenu: boolean) => !showMenu)}>
                <svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
                    <path stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22' />
                </svg>
            </button>
            <Link to="/" className="site--logo">
                <Logo />
            </Link>
            
            <Search mobile={false} />
        </header>
    )
}

export default Header