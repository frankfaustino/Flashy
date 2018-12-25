import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

import styled, { GlobalStyle, ThemeProvider, theme } from '../../utils'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80vh;
  max-width: ${({ theme }) => theme.maxWidth};
`

interface Props {
  children?: object
}

const Layout: React.SFC<Props> = ({ children }): JSX.Element => (
  <ThemeProvider theme={theme}>
    <>
      <Meta />
      <Header />
      <Content>{children}</Content>
      <Footer />
      <GlobalStyle />
    </>
  </ThemeProvider>
)

export default Layout