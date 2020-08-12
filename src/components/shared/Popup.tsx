import React, { ReactChild, MouseEvent } from "react"

const Popup = ({ children, togglePopup, setPopupType }: { children: ReactChild; togglePopup: Function; setPopupType: Function }) => {
    const closePopup = (event: MouseEvent) => {
        event.preventDefault()
        event.stopPropagation()
        togglePopup(false)
        setPopupType('login')
    }
    const preventPropogation = (event: MouseEvent) => {
        event.stopPropagation()
    }
    return (
        <div className="popup" onClick={closePopup} id="popup">
            <div className="popup__container" onClick={preventPropogation}>
                {children}
            </div>
        </div>
    )
}

export default Popup