import styled, { media } from '../../utils'
import Button from './Button'
import Mascot from './Mascot'
import Title from './Title'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: ${props => props.theme.malachite};

  ${media.mobile`
    background: #01B54A;
  `}
  ${media.tablet`
    background: #CCE1D6;
  `}
  ${media.desktop`
    background: #01D25D;
  `}
`

const ButtonWrapper = styled.div`
  display: grid;
  overflow: visible;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 50px;
`

export default () => (
  <Background>
    <Mascot />
    <Title />
    <ButtonWrapper>
      <Button text="Sign up" type="signup" />
      <Button text="Login" type="login" />
    </ButtonWrapper>
  </Background>
)