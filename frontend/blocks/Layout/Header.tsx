import Nav from './Nav'
import { Logo } from '../../elements'
import styled from '../../lib/styles/global-styles'
import { media } from '../../lib/styles/style-utils'

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr;

  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `}
`

const LogoWrapper = styled.div`
  display: none;
  height: 70px;

  ${media.tablet`
    display: grid;
    grid-template-columns: 70px 140px 1fr;
    height: 70px;
  `}
`

const H1 = styled.h1`
  align-self: center;
  margin: 0;
  color: ${({ theme }) => theme.white};
  font-size: 2rem;
  text-align: center;
`


const Header: React.SFC = (): JSX.Element => (
  <StyledHeader>
    <LogoWrapper>
      <Logo width="80%" height="80%" rotate />
      <H1>FLASHY</H1>
    </LogoWrapper>
    <Nav />
  </StyledHeader>
)

export default Header