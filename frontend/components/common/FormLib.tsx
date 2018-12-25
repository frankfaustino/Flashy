import React, { useState, createContext } from 'react'
import { ValidationError } from 'yup'

const FormContext = createContext(undefined)

interface Event {
  preventDefault: Function
  target: {
    name: string
    value: string
  }
}

interface FormUtilsArgs {
  children?: any
  initialValues: any
  onSubmit: Function
  validate: Function
}

const convertErrors = (error: ValidationError) => {
  if (error.message.includes('unique')) {
    return { email: 'this email is already in use' }
  }
  return error.inner.reduce((acc, cur) => {
    acc[cur.path] = cur.message
    return acc
  }, {})
}

const FormLib = ({ children, initialValues, onSubmit, validate }: FormUtilsArgs) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  function handleChange(name: string, value: string) {
    setValues({
      ...values,
      [name]: value
    })
    setErrors({
      ...errors,
      [name]: undefined
    })
  }

  async function submitForm() {
    try {
      validate && validate(values)
      const response = await onSubmit({ variables: values })

      if (response && response.data.logIn && !response.data.logIn.token) {
        setErrors({ password: 'invalid credentials' })
      }
      console.log('🙋‍ Authentication successful ', response)
    } catch (err) {
      console.log('🙅‍ Error: ', err)
      setErrors(convertErrors(err))
    }
  }

  function handleSubmit(e: Event) {
    e.preventDefault()
    submitForm()
  }

  function input(name: string) {
    return {
      value: values[name],
      onChange: (e: Event) => handleChange(name, e.target.value)
    }
  }

  const ctx = {
    values,
    errors,
    handleSubmit,
    input
  }

  return (
    <FormContext.Provider value={ctx}>
      {children}
    </FormContext.Provider>
  )
}

export default FormLib
export { FormContext }