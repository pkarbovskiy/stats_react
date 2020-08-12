import { keyValueObject } from '../../interfaces/interfaces'

export const loginValidation = (values: keyValueObject) => {
    const errors: keyValueObject = {}

    if (values.email === "") {
        errors.email = "Username is required!"
    }

    if (values.password === "") {
        errors.password = "Password is required"
    }

    return errors
}
