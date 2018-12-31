import { css, SCREEN_SIZES } from './global-styles'

export const truncate = (width?: number) => {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

export const media = Object.keys(SCREEN_SIZES).reduce((acc, key) => {
  acc[key] = (args: any) => css`
    @media (min-width: ${SCREEN_SIZES[key] / 16}em) {
      ${css(args)};
    }
  `
  return acc
}, {} as Record<keyof typeof SCREEN_SIZES, (args: any) => string>)
