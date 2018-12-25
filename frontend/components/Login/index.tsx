import { object, string } from 'yup'

import { Form, FormLib } from '../common'

interface FormProps {
  loading: boolean
}

interface LoginProps extends FormProps {
  logIn: Function
}

interface InputValues {
  email: string
  password: string
}

const Login: React.SFC<LoginProps> = ({ logIn, loading }) => {
  const validationSchema = object().shape({
    email: string().trim().min(3).max(255).email().required(),
    password: string().min(3).max(255).required()
  })

  return (
    <FormLib
      initialValues={{ email: '', password: '' }}
      validate={(values: InputValues) => validationSchema.validateSync(values, { abortEarly: false })}
      onSubmit={logIn}
    >
      <Form type="Log in" loading={loading} />
    </FormLib>
  )
}

export default Login