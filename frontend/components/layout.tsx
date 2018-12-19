import Meta from './meta'
import Header from './header'
import Footer from './footer'

import { createGlobalStyle, ThemeProvider, theme } from '../theme'

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; }
  body {
    background: ${props => props.theme.whiteIce};
    color: ${props => props.theme.malachite};
  }
`

interface Props {
  children?: object,
}

const Layout: React.SFC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
      <GlobalStyle />
    </>
  </ThemeProvider>
)

export default Layout