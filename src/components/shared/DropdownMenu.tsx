import React, { useState, MouseEvent } from "react"

//@todo make it generic
const DropdownMenu = ({ currentlySet, list, passCurrentValue }: { currentlySet: any; list: any[]; passCurrentValue: Function }) => {
    const [isMenuOpened, setMenuOpened] = useState<boolean>(false)

    if (!Array.isArray(list) || list.length === 0) {
        console.error(`list must be type of array and not empty`)
        return null
    }
    function handleSelect(item: any, event: MouseEvent) {
        event.preventDefault()
        passCurrentValue(item)
        setMenuOpened(false)

    }
    function toggleMenu() {
        setMenuOpened(state => !state)
    }
    return (
        <div className="dropdown">
            <div className="dropdown__header" onClick={toggleMenu}>
                {currentlySet.icon}
                <span className="dropdown__header__arrow"><svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7111 0.5L19.9717 2.79889L10.4717 12.5L0.97168 2.79889L3.23225 0.5L10.4717 7.89269L17.7111 0.5Z" fill="#666FE4" />
                </svg>
                </span>
            </div>
            <ul className={`${isMenuOpened ? 'open' : ''} dropdown__list`}>
                {list.map((item: any) =>
                    <li key={item.type} className="dropdown__list__item" onClick={handleSelect.bind(null, item.type)}>{item.icon}</li>
                )
                }
            </ul>
        </div>
    )
}
export default DropdownMenu