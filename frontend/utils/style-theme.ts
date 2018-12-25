import * as styledComponents from 'styled-components'
import { ThemedStyledComponentsModule } from 'styled-components'

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<
  ThemeInterface
>

interface ThemeInterface {
  black: string,
  grey: string,
  lightgrey: string,
  offWhite: string,
  maxWidth: string,
  bs: string,
  malachite: string,
  pigmentGreen: string,
  mintCream: string,
  white: string,
  whiteIce: string,
  mediumAquamarine: string,
  aeroBlue: string
}

const theme = {
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  malachite: '#01D25D',
  pigmentGreen: '#01B54A',
  mintCream: '#F5FBF8',
  white: '#FCFCFC',
  whiteIce: '#D5F7E7',
  mediumAquamarine: '#57E49E',
  aeroBlue: '#CCE1D6'
}

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
  body {
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.black};
    background: ${({ theme }) => theme.malachite};
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    font-family: 'Gotham Rounded Medium';
    text-decoration: none;
  }
  h1, h2, h3, h4 {
    font-family: 'Gotham Rounded Bold';
  }
`

export default styled

export { css, GlobalStyle, keyframes, theme, ThemeProvider }

/* 🎨 Color scheme
  app {
      --mint-cream: #F5FBF8;
      --malachite: #01D25D;
      --white-ice: #D5F7E7;
      --pigment-green: #01B54A;
      --medium-aquamarine: #57E49E;
      --aero-blue: #CCE1D6;
  }

  cards {
      --alice-blue: #F3F9FC;
      --solitude: #E4E5E6;
      --orange-peel: #FFA005;
      --dodger-blue: #1E96F4;
      --malachite: #15D460;
      --alizarin: #FE303C;
  }

  folders {
    --alice-blue: #F4F9FC;
    --porcelain: #DEDCDA;
    --radical-red: #FF4453;
    --dodger-blue: #0A93FB;
    --golden-tainoi: #FFC851;
    --gum-leaf: #A1C1AC;
  }

  profile {
      --alice-blue: #F8FAFB;
      --medium-sea-green: #2DD264;
      --mystic: #D6DAD7;
      --pale-oyster: #9C9071;
      --casablanca: #F3A74E;
      --paco: #4E3C36;
  }

  store {
      --alice-blue: #F7FAFB;
      --gainsboro: #DEDEDE;
      --dodger-blue: #0598F6;
      --pattens-blue: #D5EDFA;
      --dark-cerulean: #00397A;
      --navy-blue: #1D7CD7;
}

*/

/* 📐 CSS StyleGuide
  1. Layout Properties (position, float, clear, display)
  2. Box Model Properties (width, height, margin, padding)
  3. Visual Properties (color, background, border, box-shadow)
  4. Typography Properties (font-size, font-family, text-align, text-transform)
  5. Misc Properties (cursor, overflow, z-index)

  .example {
    // layout
    display: inline-block;

    // box-model
    margin: 1em 0;
    padding: 1em 4em;

    // visual
    color: #fff;
    background: #196e76;
    border: 0.25em solid #196e76;
    box-shadow: inset 0.25em 0.25em 0.5em rgba(0, 0, 0, 0.3), 0.5em 0.5em 0 #444;

    // typography
    font-size: 3em;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;

    // miscellaneous
    z-index: 8;
  }
*/
