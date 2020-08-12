
import { keyValueObject } from '../../interfaces/interfaces'

export const registrationValidation = (values: keyValueObject) => {

    const errors: keyValueObject = {}

    if (values.password !== '' && values.password !== values.password1) {
        errors.password = "Passwords missmatch"
    }
}