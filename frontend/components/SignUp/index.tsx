import { object, string } from 'yup'

import { Form, FormLib } from '../common'

interface FormProps {
  loading: boolean
}

interface SignUpProps extends FormProps {
  signUp: Function
}

interface InputValues {
  email: string
  name: string
  password: string
}

const SignUp: React.SFC<SignUpProps> = ({ signUp, loading }) => {
  const validationSchema = object().shape({
    name: string().trim().min(2).max(255).required(),
    email: string().trim().min(3).max(255).email().required(),
    password: string().min(3).max(255).required()
  })

  return (
    <FormLib
      initialValues={{ email: '', name: '', password: '' }}
      validate={(values: InputValues) => validationSchema.validateSync(values, { abortEarly: false })}
      onSubmit={signUp}
    >
      <Form type="Sign up" loading={loading} />
    </FormLib>
  )
}

export default SignUp
