import React, { createContext, ReactNode, useState } from 'react'
import { ValidationError } from 'yup'
import Router from 'next/router'

const FormContext = createContext(undefined)

interface Event {
  preventDefault: Function
  target: {
    name: string
    value: string
  }
}

interface FormUtilsArgs {
  children?: ReactNode
  initialValues: any
  onSubmit: (obj: any) => Promise<any>
  validate: Function
}

const convertErrors = (error: ValidationError) => {
  if (error.message.includes('unique')) {
    return { email: 'this email is already in use' }
  }
  if (error.inner) {
    return error.inner.reduce((acc, cur) => {
      acc[cur.path] = cur.message
      return acc
    }, {})
  }
  return {}
}

const FormLib: React.SFC<FormUtilsArgs> = ({
  children,
  initialValues,
  onSubmit,
  validate
}) => {
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

      const { data } = await onSubmit({ variables: values })

      if (data && data.logIn && !data.logIn.token) {
        setErrors({ password: 'invalid credentials' })
      }
      if (data && (data.logIn || data.signUp)) {
        console.log('🙋‍ Authentication successful ', data)
        Router.push('/')
      }
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

  return <FormContext.Provider value={ctx}>{children}</FormContext.Provider>
}

export default FormLib
export { FormContext }
