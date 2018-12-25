
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import SignUp from '../components/SignUp'
import { LogoWithBg } from '../components/common'
import { AuthWrapper, Title } from '../components/common/styles'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      id
      token
    }
  }
`

const SignUpPage = () => {
  return (
    <AuthWrapper>
      <LogoWithBg />
      <Title>Sign up for Flashy!</Title>
      <Mutation mutation={SIGNUP_MUTATION}>
        {(signUp, { loading }) => <SignUp signUp={signUp} loading={loading} />}
      </Mutation>
    </AuthWrapper>
  )
}

export default SignUpPage