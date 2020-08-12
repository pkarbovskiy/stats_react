import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { keyValueObject } from '../../interfaces/interfaces'

const useFormValidation = (initialState: keyValueObject, validate: Function, onSubmit: Function) => {
    const [values, setFieldValue] = useState<keyValueObject>(initialState)
    const [touched, setTouched] = useState<keyValueObject>({})
    const [errors, setErrors] = useState<keyValueObject>(initialState)
    const [isSubmitting, setSubmitting] = useState<boolean>(false)

    useEffect(() => {
        if (isSubmitting) {

            const noErrors = Object.keys(errors).length === 0

            if (noErrors) {
                //do something else
                //setSubmitting(false);
            }
            setSubmitting(false)

        }
    }, [errors, isSubmitting]);

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const { target: { name, value } } = event

        setFieldValue({
            ...values,
            [name]: value
        })
    }

    function handleSubmit(event: FormEvent): void {
        event.preventDefault()

        if (isSubmitting) {
            return
        }

        onSubmit(event)
    }

    function handleBlur(event: ChangeEvent<HTMLInputElement>): void {
        const { target: { name, value } } = event

        const validationErrors = validate(touched)

        setTouched({
            ...touched,
            [name]: value
        })

        setErrors(validationErrors);
    }


    return {
        handleChange,
        handleBlur,
        setErrors,
        values,
        touched,
        errors,
        handleSubmit,
        isSubmitting
    }
}

export { useFormValidation }