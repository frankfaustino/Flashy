import { Folder } from '../elements'
import styled from '../lib'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  max-width: ${({ theme }) => theme.maxWidth};
`

const Decks: React.SFC = () => <Main><Folder /></Main>

export default Decks