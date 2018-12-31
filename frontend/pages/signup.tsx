import { Mutation } from 'react-apollo'
import { object, string } from 'yup'

import Form, { FormLib } from '../blocks/Form'
import { LogoWithBg, H2 } from '../elements'
import { SIGNUP_MUTATION } from '../lib/graphql/mutations'
import { ME_QUERY } from '../lib/graphql/queries'
import styled from '../lib/styles/global-styles'

interface InputValues {
  email: string
  name: string
  password: string
}

const Main = styled.div`
  display: grid;
  grid-auto-rows: 178px 100px 1fr;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

const schema = object().shape({
  name: string().trim().min(2).max(255).required(),
  email: string().trim().min(3).max(255).email().required(),
  password: string().min(3).max(255).required()
})

const SignUpMutation = (signUp, { loading }) => (
  <FormLib
    initialValues={{ email: '', name: '', password: '' }}
    validate={(values: InputValues) => schema.validateSync(values, { abortEarly: false })}
    onSubmit={signUp}
  >
    <Form type="Sign up" loading={loading} />
  </FormLib>
)

const SignUp = () => (
  <Main>
    <LogoWithBg />
    <H2>Sign up for Flashy!</H2>
    <Mutation mutation={SIGNUP_MUTATION} refetchQueries={[{ query: ME_QUERY }]}>
      {SignUpMutation}
    </Mutation>
  </Main>
)

export default SignUp
