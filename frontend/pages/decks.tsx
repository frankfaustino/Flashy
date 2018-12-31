import withAuth from '../blocks/withAuth'
import styled from '../lib/styles/global-styles'

const Main = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-template-columns: 200px 200px;
  grid-template-rows: 160px 160px;
  grid-gap: 40px;
  height: 80vh;
  padding-top: 50px;
  max-width: ${({ theme }) => theme.maxWidth};
`

const Decks: React.SFC = () => (
  <Main>
    <img src="/static/folder_green.svg" />
    <img src="/static/folder_red.svg" />
    <img src="/static/folder_blue.svg" />
    <img src="/static/folder_lightgrey.svg" />
  </Main>
)

export default withAuth(Decks)