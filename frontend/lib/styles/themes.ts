const maxWidth = '1000px'
// const boxShadow = '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
// box-shadow: 0 0 15px rgba(0,0,0,.08), 0 0 4px rgba(0,0,0,.05);
// box-shadow: 0 2px 16px 1px rgba(0, 0, 0, 0.15);

// neutrals
const black = '#393939'
const lightGrey = '#E1E1E1'
// const offWhite = '#EDEDED'
const white = '#FCFCFC'

// primary
// errors (red)
// yellow (warnings)
// green (confirmation)

// main
// const mintCream = '#F5FBF8'
const malachite = '#15D460'
// const whiteIce = '#D5F7E7'
// const pigmentGreen = '#01B54A'
// const mediumAquamarine = '#57E49E'
// const aeroBlue = '#CCE1D6'

// cards
const aliceBlue = '#F3F9FC'
// const solitude = '#E4E5E6'
// const orangePeel = '#FFA005'
// const dodgerBlue = '#1E96F4'
// const alizarin = '#FE303C'

// folders
// const porcelain = '#DEDCDA'
// const radicalRed = '#FF4453'
// const dodgerBlue = '#0A93FB'
// const goldenTainoi = '#FFC851'
// const gumLeaf = '#A1C1AC'

// profile
// const aliceBlue = '#F8FAFB'
// const mediumSeaGreen = '#2DD264'
// const mystic = '#D6DAD7'
// const paleOyster = '#9C9071'
// const casablanca = '#F3A74E'
// const paco = '4#E3C36'

// store
// const aliceBlue = '#F7FAFB'
// const gainsboro = '#DEDEDE'
// const dodgerBlue = '#0598F6'
// const pattensBlue = '#D5EDFA'
// const darkCerulean = '#00397A'
// const navyBlue = '#1D7CD7'

export interface ThemeInterface {
  background: string
  black: string
  lightGrey: string
  white: string
  maxWidth: string
  primary: string
  malachite: string
}

export const BASE_THEME = {
  background: malachite,
  black,
  lightGrey,
  white,
  maxWidth,
  primary: malachite,
  malachite
}

export const ALT_THEME = {
  ...BASE_THEME,
  background: aliceBlue,
}
