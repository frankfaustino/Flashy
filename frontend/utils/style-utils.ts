import { css } from './style-theme'

export const truncate = (width?: number) => {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

const sizes = {
  desktop: 992,
  tablet: 768,
  mobile: 576
}

export const media = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = (args: any) => css`
    @media (min-width: ${sizes[key] / 16}em) {
      ${css(args)};
    }
  `
  return acc
}, {} as Record<keyof typeof sizes, (args: any) => string>)
