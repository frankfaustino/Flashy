import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

import styled from '../../theme'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Nav = styled.nav`
  display: grid;
  height: 70px;
  grid-template-columns: 1fr 1fr 1fr 1fr 75%;
`

const StyledLink = styled.a`
  align-self: center;
  text-align: center;
`

interface Props {
  href: string,
  name: string
}

const ALink: React.SFC<Props> = ({ href, name }) => (
  <Link href={href} passHref>
    <StyledLink>{name}</StyledLink>
  </Link>
)

const Header: React.SFC = (): JSX.Element => (
  <header>
    <Nav>
      <ALink href="/" name="Home" />
      <ALink href="/decks" name="Decks" />
      <ALink href="/profile" name="Profile" />
      <ALink href="/settings" name="Settings" />
    </Nav>
  </header>
)

export default Header