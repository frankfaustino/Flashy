import { Logo, LogoBg } from '.'
import styled from '../../utils'

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoWithBg = () => (
  <LogoWrapper>
    <Logo />
    <LogoBg />
  </LogoWrapper>
)
export default LogoWithBg