import React, { ReactNode } from 'react'

const HamburgerMenu = ({ isMenuShown, children }: {isMenuShown:boolean, children: ReactNode}) => {
    return (
        <nav className="main-nav">
            <div className={`main-nav--links${isMenuShown ? '' : ' hide'}`}>
                {children}
            </div>
        </nav>
    )
}

export default HamburgerMenu