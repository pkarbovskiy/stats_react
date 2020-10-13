import React, { FormEvent } from "react"
import { useFormValidation } from '../form/useFormValidation'
import { registrationValidation } from '../form/registrationValidation'
import { Link } from 'react-router-dom'
import { AuthUrls } from '../../constants'
import { gaEvents } from '../../common_function'

const INITIAL_STATE = {
    username: '',
    email: '',
    password1: '',
    password2: ''
}

const Registration = ({ togglePopup, setAuthenticated }: { togglePopup: Function; setAuthenticated: Function }) => {
    const signupUrl = AuthUrls.SIGNUP
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        setErrors,
        values,
        errors,
        touched,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, registrationValidation, onSubmit);

    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=::email::&username=::username::&password1=::password1::&password2=::password2::`
    }

    function onSubmit(event: FormEvent) {
        Object.keys(values).map(val => {
            config.body = config.body.replace(`::${val}::`, values[val])
        })

        const errors = registrationValidation(values)

        fetch(signupUrl, config)
            .then(response =>
                response.json().then(user => ({ user, response }))
            ).then(({ user, response }) => {
                if (!response.ok) {
                    return Promise.reject(user)
                }
                gaEvents({ eventCategory: 'Sign Up Complete', eventAction: 'Sign Up Complete', eventLabel: 'Sign Up Complete' })
                setAuthenticated(user.key)
                togglePopup(false)
            }).catch(err => {
                const errorObject = Object.keys(err).reduce((acc, val) => {
                    acc[val] = acc[val].join('\n')
                    return acc
                }, err)
                gaEvents({ eventCategory: 'Sign Up Error', eventAction: 'Sign Up Error', eventLabel: 'Sign Up Error' })
                setErrors(errorObject)
            })
    }

    return (
        <form
            className=""
            onSubmit={handleSubmit}
        >
            <h2 className="text-black form-header">Sign up</h2>
            <fieldset className="form-group">
                <label htmlFor="#">Username</label>
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={values.username}
                    autoComplete="username"
                    autoFocus
                    placeholder="yourCoolUserName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required />
                {errors && errors.username != null && errors.username !== '' && <span className="text-sm text-red-600"> *{errors.username}</span>}
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="#">Email</label>
                <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="yourname@email.com"
                    autoComplete="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required />
                {errors && errors.email != null && errors.email !== '' && <span className="text-sm text-red-600">*{errors.email}</span>}
            </fieldset>

            <fieldset className="form-group">
                <label htmlFor="#">Password</label>
                <input
                    className="form-control"
                    name="password1"
                    type="password"
                    autoComplete="new-password"
                    placeholder="***********"
                    value={values.password1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required />
                {errors && errors.password1 != null && errors.password1 !== '' && <span className="text-sm text-red-600">*{errors.password1}</span>}
            </fieldset>
            <fieldset className="form-group">
                <label htmlFor="#">Repeat Password</label>
                <input
                    className="form-control"
                    name="password2"
                    type="password"
                    autoComplete="new-password"
                    placeholder="***********"
                    value={values.password2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required />
                {errors && errors.password2 != null && errors.password2 !== '' && <span className="text-sm text-red-600">*{errors.password2}</span>}
            </fieldset>
            <div>
                <p className="text-black text-center">
                    By clicking the Sign Up button,<br />
                    I agree to the <Link to="/terms_of_service" target="_blank">terms of service</Link>
                </p>
                <fieldset className="form-group">
                    {errors && errors.non_field_errors != null && errors.non_field_errors !== '' && <span className="text-sm text-red-600">* {errors.non_field_errors}</span>}
                    <button type="submit" className="btn" disabled={isSubmitting}>SIGN UP</button>
                </fieldset>
            </div>
        </form>
    )
}
export default Registration