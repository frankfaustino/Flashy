import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { object, string } from 'yup'

import Form, { FormLib } from '../blocks/Form'
import { LogoWithBg, H2 } from '../elements'
import styled from '../lib'

interface InputValues {
  email: string
  name: string
  password: string
}

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signUp(name: $name, email: $email, password: $password) {
      id
      token
    }
  }
`

const Main = styled.div`
  display: grid;
  grid-auto-rows: 178px 100px 1fr;
  justify-content: center;
  align-items: center;
`

const SignUp = () => {
  const schema = object().shape({
    name: string().trim().min(2).max(255).required(),
    email: string().trim().min(3).max(255).email().required(),
    password: string().min(3).max(255).required()
  })

  return (
    <Main>
      <LogoWithBg />
      <H2>Sign up for Flashy!</H2>
      <Mutation mutation={SIGNUP_MUTATION}>
        {(signUp, { loading }) => (
          <FormLib
            initialValues={{ email: '', name: '', password: '' }}
            validate={(values: InputValues) => schema.validateSync(values, { abortEarly: false })}
            onSubmit={signUp}
          >
            <Form type="Sign up" loading={loading} />
          </FormLib>
        )}
      </Mutation>
    </Main>
  )
}

export default SignUp
