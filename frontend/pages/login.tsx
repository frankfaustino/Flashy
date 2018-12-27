import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { object, string } from 'yup'

import Form, { FormLib } from '../blocks/Form'
import { LogoWithBg, H2 } from '../elements'
import styled from '../lib'

interface InputValues {
  email: string
  password: string
}

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
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

const LogInPage = () => {
  const schema = object().shape({
    email: string().trim().min(3).max(255).email().required(),
    password: string().min(3).max(255).required()
  })

  return (
    <Main>
      <LogoWithBg />
      <H2>Log in to Flashy!</H2>
      <Mutation mutation={LOGIN_MUTATION}>
        {(logIn, { loading }) => (
          <FormLib
          initialValues={{ email: '', password: '' }}
          validate={(values: InputValues) => schema.validateSync(values, { abortEarly: false })}
          onSubmit={logIn}
        >
          <Form type="Log in" loading={loading} />
        </FormLib>
        )}
      </Mutation>
    </Main>
  )
}

export default LogInPage