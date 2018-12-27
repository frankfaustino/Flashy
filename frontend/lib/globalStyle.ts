import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'
import { ThemeInterface } from './themes'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>

const fontDeclarations = css`
  @font-face {
    font-family: 'Gotham Rounded Bold';
    src: url('/static/GothamRnd-Bold.woff2') format('woff2'),
         url('/static/GothamRnd-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Gotham Rounded Medium';
    src: url('/static/GothamRnd-Medium.woff2') format('woff2'),
         url('/static/GothamRnd-Medium.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Gotham Rounded Book';
    src: url('/static/GothamRnd-Book.woff2') format('woff2'),
         url('/static/GothamRnd-Book.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Gotham Rounded Light';
    src: url('/static/GothamRnd-Light.woff2') format('woff2'),
         url('/static/GothamRnd-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
`

const baseStyle = css`
  html {
    overflow: hidden;
  }
  html * {
    box-sizing: border-box;
    font-family: 'Gotham Rounded Book';
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  a {
    font-family: 'Gotham Rounded Medium';
    text-decoration: none;
  }
  h1, h2, h3, h4 {
    font-family: 'Gotham Rounded Bold';
  }
  body {
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.black};
    font-size: 1.5rem;
    line-height: 2;
    background: ${({ theme }) => theme.background};
  }
`

const GlobalStyle = createGlobalStyle`
  ${fontDeclarations}

  ${baseStyle}

  #__next {
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    padding: 1rem 2rem;
  }
`

export default styled

export { createGlobalStyle, css, GlobalStyle, keyframes, ThemeProvider }
