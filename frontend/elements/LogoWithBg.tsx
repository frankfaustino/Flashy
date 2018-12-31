import { Logo, LogoBg } from '.'
import styled from '../lib/styles/global-styles'

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 178px;
  margin: 25px;
`

const LogoWithBg = () => (
  <LogoWrapper>
    <Logo />
    <LogoBg />
  </LogoWrapper>
)
export default LogoWithBg