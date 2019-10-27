import React from 'react'
import Search from '../components/Search'
import Info from '../components/Info'
import HumbuergerLogo from '../components/HamburgerLogo'

const Header = ({ toggleMenu }: { toggleMenu: (arg0: any) => void }) => {
    return (
        <header className="header">
            <HumbuergerLogo toggleMenu={toggleMenu} />
            <Search mobile={false} />
            <Info/>
        </header>
    )
}

export default Header