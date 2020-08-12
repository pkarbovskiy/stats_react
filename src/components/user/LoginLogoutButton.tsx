import React, { MouseEvent } from "react"
import { AuthUrls } from '../../constants'

const LoginLogoutButton = ({ isAuthenticated, togglePopup, setAuthenticated }: { isAuthenticated: boolean; togglePopup: Function; setAuthenticated: Function; }) => {
    const handleLogout = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()

        const token = localStorage.getItem('token')

        let config = {
            method: 'POST',
            headers: { 'Authenticatoin': `Token ${token}` }
        }

        const logoutUrl = AuthUrls.LOGOUT

        fetch(logoutUrl, config)
            .then(response =>
                response.json().then(user => ({ user, response }))
            ).then(({ user, response }) => {
                // @todo redo so we remove tocken with jwt won't be nesseccary
                setAuthenticated()
                if (!response.ok) {
                    return Promise.reject(user)
                }

                // @todo implement proper handling off error
            }).catch(err => { setAuthenticated() })
    }

    const handleLogin = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault()
        togglePopup(true)
    }

    if (isAuthenticated) {
        return <button onClick={handleLogout} className="bg-primary-500 hover:bg-indigo-800 login_logout--btn">Logout</button>
    }

    return <button onClick={handleLogin} className="bg-primary-500 hover:bg-indigo-800 login_logout--btn">Login</button>
}
export default LoginLogoutButton