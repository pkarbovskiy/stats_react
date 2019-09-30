import React, { ReactElement, Children, cloneElement } from 'react'

const HamburgerMenu = ({ isMenuShown, toggleMenu, children }: {isMenuShown:boolean; toggleMenu: (arg0:any) => void; children: ReactElement[]}) => {
    return (
        <nav className="main-nav">
            <div className={`main-nav--links${isMenuShown ? '' : ' hide'}`}>
                {Children.map(children, child => cloneElement(child, {onClick: () => toggleMenu((showMenu: boolean) => false)}))}
            </div>
        </nav>
    )
}

export default HamburgerMenu