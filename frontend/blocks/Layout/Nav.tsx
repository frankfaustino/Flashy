import Link from 'next/link'
import { Query, Mutation } from 'react-apollo'

import styled from '../../lib/styles/global-styles'
import { media } from '../../lib/styles/style-utils'
import { ME_QUERY } from '../../lib/graphql/queries'
import { LOGOUT_MUTATION } from '../../lib/graphql/mutations'

const NavWrapper = styled.nav`
  display: grid;
  height: 70px;
  grid-template-columns: repeat(5, 1fr);

  a {
    color: ${({ theme }) => theme.black};
    align-self: center;
    text-align: center;
  }

  ${media.tablet`
    align-self: flex-end;
  `}
`

const A = styled.a`
  cursor: pointer;
`

const QueryLinks = () => (
  <Query query={ME_QUERY} fetchPolicy="cache-and-network" errorPolicy="ignore">
  {({ client, data, loading }) => {
    return loading
      ? null :
      data && data.me
      ? <>
          <Link href="/profile"><a>Profile</a></Link>
          <Link href="/settings"><a>Settings</a></Link>
          <Mutation mutation={LOGOUT_MUTATION}>
            {logOut => <A onClick={() => logOut().then(() => client.resetStore())}>Logout</A>}
          </Mutation>
        </>
      : <Link href="/landing"><a>Login</a></Link>
  }}
  </Query>
)

const Nav = () => {
  return (
    <NavWrapper>
      <Link href="/"><a>Home</a></Link>
      <Link href="/decks"><a>Decks</a></Link>
      <QueryLinks />
    </NavWrapper>
  )
}

export default Nav