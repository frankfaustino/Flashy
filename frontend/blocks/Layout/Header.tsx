import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

import styled, { media } from '../../lib'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Nav = styled.nav`
  display: grid;
  height: 70px;
  grid-template-columns: repeat(4, 1fr);

  a {
    color: ${({ theme }) => theme.black};
    align-self: center;
    text-align: center;
  }

  ${media.desktop`
    grid-template-columns: repeat(4, 1fr) 60%;
  `}
`

const Header: React.SFC = (): JSX.Element => (
  <header>
    <Nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/decks"><a>Decks</a></Link>
      <Link href="/profile"><a>Profile</a></Link>
      <Link href="/settings"><a>Settings</a></Link>
    </Nav>
  </header>
)

export default Header