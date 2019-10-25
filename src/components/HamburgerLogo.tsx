import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../common/logo'

const HumburgerLogo = ({ toggleMenu, noHomeLink = false }: { toggleMenu: (arg0: any) => void, noHomeLink?: boolean }) => {
    return (
        <div>
            <button className="main-nav__ham_menu" onClick={() => toggleMenu((showMenu: boolean) => !showMenu)}>
                <svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeWidth='2' strokeLinecap='round' strokeMiterlimit='10' d='M4 7h22M4 15h22M4 23h22' />
                </svg>
                {noHomeLink ?
                    <Logo /> :
                    ''
                }
            </button>
            {noHomeLink ?
                '' :
                <Link to="/" className="site--logo">
                    <Logo />
                </Link>
            }

        </div>
    )
}

export default HumburgerLogo