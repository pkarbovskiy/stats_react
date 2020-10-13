import React, { MouseEvent } from "react"
import { gaEvents } from '../../common_function'

const RegistrationButton = ({ togglePopup, setPopupType }: { togglePopup: Function, setPopupType: Function }) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
        gaEvents({ eventCategory: 'Sign Up Initial', eventAction: 'Sign Up Initial', eventLabel: 'Sign Up Initial' })
        togglePopup(true)
        setPopupType('registration')
    }

    return (
        <button onClick={handleClick} className="bg-primary-500 hover:bg-indigo-800 login_logout--btn">Sign Up</button>
    )
}
export default RegistrationButton