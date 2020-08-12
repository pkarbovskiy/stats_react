import React, { FormEvent, MouseEvent, ReactChild } from "react"
import { loginUrl } from '../../constants'
import { useFormValidation } from '../form/useFormValidation'
import { loginValidation } from '../form/loginValidation'

const INITIAL_STATE = {
    email: "",
    password: ""
}

const Login = ({ togglePopup, setPopupType, setAuthenticated, children }: { togglePopup: Function; setPopupType: Function, setAuthenticated: Function, children: ReactChild }) => {

    const {
        handleChange,
        setErrors,
        handleBlur,
        values,
        errors,
        touched,
        handleSubmit,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, loginValidation, onSubmit);

    const swithcToRegistration = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        setPopupType('registration')
    }

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=::email::&password=::password::`
    }

    function onSubmit(event: FormEvent) {

        Object.keys(values).map(val => {
            config.body = config.body.replace(`::${val}::`, values[val])
        })
        const errors = loginValidation(values)

        fetch(loginUrl, config)
            .then(response =>
                response.json().then(user => ({ user, response }))
            ).then(({ user, response }) => {

                if (!response.ok) {
                    return Promise.reject(user)
                }
                setAuthenticated(user.key)
                togglePopup(false)
                // @todo add jwt
                //localStorage.setItem('id_token', user.id_token)
                //localStorage.setItem('id_token_access', user.access_token)


            }).catch(err => {
                const errorObject = Object.keys(err).reduce((acc, val) => {
                    acc[val] = acc[val].join('\n')
                    return acc
                }, err)
                setErrors(errorObject)
            })
    }
    return (
        <div className="row justify-content-center">
            <form
                className="col col-sm-4 card mt-5 p-2"
                onSubmit={handleSubmit}
            >
                <h2 className="text-black form-header">Log In</h2>

                <fieldset className="form-group">
                    <label htmlFor="#">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={values.username}
                        autoComplete="email"
                        placeholder="yourname@email.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required />
                    {errors && errors.email != null && errors.email !== '' && <span className="text-sm text-red-600">*{errors.email}</span>}
                </fieldset>
                <fieldset className="form-group">
                    <label htmlFor="#">Password</label>
                    <input
                        className="form-control"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={values.password}
                        placeholder="***********"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required />
                </fieldset>

                <fieldset className="form-group">
                    {errors && errors.non_field_errors != null && errors.non_field_errors !== '' && <span className="text-sm text-red-600">* {errors.non_field_errors}</span>}
                    <button type="submit" className="btn" disabled={isSubmitting}>Login</button>
                </fieldset>
                {children}
            </form>
        </div>
    )
}
export default Login