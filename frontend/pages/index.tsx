import { Button, H1, LogoWithBg } from '../elements'
import styled from '../lib'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  max-width: ${({ theme }) => theme.maxWidth};
`

const Buttons = styled.div`
  display: grid;
  overflow: visible;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 25px;
`

const Landing: React.SFC = () => (
  <Main>
    <LogoWithBg />
    <H1>FLASHY</H1>
    <Buttons>
      <Button text="Sign up" to="/signup" variant="dashed" />
      <Button text="Login" to="/login" variant="solid" />
    </Buttons>
  </Main>
)

export default Landing