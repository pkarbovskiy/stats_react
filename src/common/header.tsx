import React from 'react'
import Search from '../components/Search'
import Info from '../components/Info'
import HumbuergerLogo from '../components/HamburgerLogo'
import { Link } from 'react-router-dom'
import Logo from './logo'

const Header = ({ toggleMenu }: { toggleMenu: (arg0: any) => void }) => {
    return (
        <header className="h-48 p-6 header md:h-auto lg:p-0">
            <div className="h-full mb-4 logo_container lg:mb-0">
                <Link to="/" className="flex items-center h-full lg:px-8">
                    <Logo />
                </Link>
                <button className="expand-collapse" onClick={() => toggleMenu((showMenu: boolean) => !showMenu)}>
                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 13.9495L8.08426 15.8333L-3.46049e-07 7.91667L8.08426 -8.37396e-08L10 1.88381L3.83943 7.91667L10 13.9495Z" fill="#666FE4" />
                    </svg>
                </button> 
            </div>
            <div className="header__side">
                <Search />
            </div>
        </header>
    )
}

export default Header