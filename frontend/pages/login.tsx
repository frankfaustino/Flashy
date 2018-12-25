import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import Login from '../components/Login'
import { LogoWithBg } from '../components/common'
import { AuthWrapper, Title } from '../components/common/styles'

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      id
      token
    }
  }
`

const LogInPage = () => {
  return (
    <AuthWrapper>
      <LogoWithBg />
      <Title>Log in to Flashy!</Title>
      <Mutation mutation={LOGIN_MUTATION}>
        {(logIn, { loading }) => <Login logIn={logIn} loading={loading} />}
      </Mutation>
    </AuthWrapper>
  )
}

export default LogInPage