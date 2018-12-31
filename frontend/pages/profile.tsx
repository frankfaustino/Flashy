import withAuth from '../blocks/withAuth'
import styled from '../lib/styles/global-styles'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  max-width: ${({ theme }) => theme.maxWidth};
`

const Profile: React.SFC = () => <Main>Profile</Main>

export default withAuth(Profile)