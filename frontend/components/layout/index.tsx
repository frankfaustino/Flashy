import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

import { createGlobalStyle, ThemeProvider, theme } from '../../theme'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background: #FCFCFC;
    color: ${props => props.theme.malachite};
  }
  a {
    text-decoration: none;
  }
`

interface Props {
  children?: object,
}

const Layout: React.SFC<Props> = ({ children }): JSX.Element => (
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