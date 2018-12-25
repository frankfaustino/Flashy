import { useContext } from 'react'
import { FormContext } from './FormLib'
import StyledForm from './styles/Form'
import { Button } from '.'

interface FormProps {
  loading: boolean,
  type: string
}

const Form: React.SFC<FormProps> = ({ loading, type }) => {
  const { errors, handleSubmit, input } = useContext(FormContext)
  const nameInput = (
    <>
      <label>Name</label>
      <input name="name" {...input('name')} />
      {errors.name && <div>{errors.name}</div>}
    </>
  )

  return (
    <StyledForm onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        {type === 'Sign up' && nameInput}
        <label>Email</label>
        <input name="email" {...input('email')} />
        {errors.email && <div>{errors.email}</div>}
        <label>Password</label>
        <input name="password" {...input('password')} />
        {errors.password && <div>{errors.password}</div>}
        <Button size="100%" text={type} type="submit" variant="solid" />
      </fieldset>
    </StyledForm>
  )
}

export default Form
