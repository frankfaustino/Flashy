import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

import styled, { createGlobalStyle, ThemeProvider, theme } from '../../theme'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Gotham Rounded Bold';
    src: url('/static/GothamRnd-Bold.woff2') format('woff2'),
         url('/static/GothamRnd-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham Rounded Medium';
    src: url('/static/GothamRnd-Medium.woff2') format('woff2'),
         url('/static/GothamRnd-Medium.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham Rounded Book';
    src: url('/static/GothamRnd-Book.woff2') format('woff2'),
         url('/static/GothamRnd-Book.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham Rounded Light';
    src: url('/static/GothamRnd-Light.woff2') format('woff2'),
         url('/static/GothamRnd-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Gotham Rounded Book';
    font-size: 1.5rem;
    line-height: 2;
    background: #FCFCFC;
    color: ${props => props.theme.black};
  }
  a {
    font-family: 'Gotham Rounded Medium';
    text-decoration: none;
  }
  h1, h2, h3, h4 {
    font-family: 'Gotham Rounded Bold';
  }
`

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

interface Props {
  children?: object,
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