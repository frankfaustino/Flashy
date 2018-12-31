import { Mutation } from 'react-apollo'
import { object, string } from 'yup'

import Form, { FormLib } from '../blocks/Form'
import { LogoWithBg, H2 } from '../elements'
import { LOGIN_MUTATION } from '../lib/graphql/mutations'
import { ME_QUERY } from '../lib/graphql/queries'
import styled from '../lib/styles/global-styles'

interface InputValues {
  email: string
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
  email: string().trim().min(3).max(255).email().required(),
  password: string().min(3).max(255).required()
})

const LoginMutation = (logIn, { loading }) => (
  <FormLib
    initialValues={{ email: '', password: '' }}
    validate={(values: InputValues) => schema.validateSync(values, { abortEarly: false })}
    onSubmit={logIn}
  >
    <Form type="Log in" loading={loading} />
  </FormLib>
)


const LogIn = () => (
  <Main>
    <LogoWithBg />
    <H2>Log in to Flashy!</H2>
      <Mutation mutation={LOGIN_MUTATION} refetchQueries={[{ query: ME_QUERY }]}>
        {LoginMutation}
      </Mutation>
  </Main>
)

export default LogIn