import React, { useState, ReactNode} from 'react'

const HamburgerMenu = ({ children }: {children: ReactNode}) => {
    const [showMenu, toggleMenu] = useState(false)
    return (
        <nav className="main-nav">
            <button className="main-nav__ham_menu" onClick={() => toggleMenu((showMenu: boolean) => !showMenu)}>
                <svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
                    <path stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22' />
                </svg>
            </button>
            <div className={`main-nav--links${showMenu ? '' : ' hide'}`}>
                <button className="close" onClick={() => toggleMenu((showMenu: boolean) => !showMenu)}>
                    <svg viewBox="0 0 512 512"><path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h404c3.3 0 6 2.7 6 6v340zM356.5 194.6L295.1 256l61.4 61.4c4.6 4.6 4.6 12.1 0 16.8l-22.3 22.3c-4.6 4.6-12.1 4.6-16.8 0L256 295.1l-61.4 61.4c-4.6 4.6-12.1 4.6-16.8 0l-22.3-22.3c-4.6-4.6-4.6-12.1 0-16.8l61.4-61.4-61.4-61.4c-4.6-4.6-4.6-12.1 0-16.8l22.3-22.3c4.6-4.6 12.1-4.6 16.8 0l61.4 61.4 61.4-61.4c4.6-4.6 12.1-4.6 16.8 0l22.3 22.3c4.7 4.6 4.7 12.1 0 16.8z">
                    </path></svg>
                </button>
                {children}
            </div>
        </nav>
    )
}

export default HamburgerMenu