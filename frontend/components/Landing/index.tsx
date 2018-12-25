import styled from '../../utils'
import { Button, LogoWithBg } from '../common'
import Title from './Title'

const ButtonWrapper = styled.div`
  display: grid;
  overflow: visible;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 50px;
`

export default () => (
  <>
    <LogoWithBg />
    <Title />
    <ButtonWrapper>
      <Button text="Sign up" to="/signup" variant="dashed" />
      <Button text="Login" to="/login" variant="solid" />
    </ButtonWrapper>
  </>
)