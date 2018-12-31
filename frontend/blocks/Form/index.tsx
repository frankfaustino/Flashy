import { useContext } from 'react'
import FormLib, { FormContext } from './FormLib'
import Form from './Form'
import { Button } from '../../elements'

interface FormProps {
  loading: boolean,
  type: string
}

const FormWrapper: React.SFC<FormProps> = ({ loading, type }) => {
  const { errors, handleSubmit, input } = useContext(FormContext)
  const nameInput = (
    <>
      <label>Name</label>
      <input name="name" {...input('name')} />
      {errors.name && <div>{errors.name}</div>}
    </>
  )

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        {type === 'Sign up' && nameInput}
        <label>Email</label>
        <input name="email" autoComplete="username" {...input('email')} />
        {errors.email && <div>{errors.email}</div>}
        <label>Password</label>
        <input name="password" type="password" autoComplete="current-password" {...input('password')} />
        {errors.password && <div>{errors.password}</div>}
        <Button size="100%" text={type} type="submit" variant="solid" />
      </fieldset>
    </Form>
  )
}

export default FormWrapper
export { FormLib }
