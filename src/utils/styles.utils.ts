import css from '@emotion/css'

export const transitionConfig = css`
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

export const desktopQuery = (...args: any[]) => css`
  @media (min-width: 1200px) {
    ${args}
  }
`

export const tabletQuery = (...args: any[]) => css`
  @media (min-width: 600px) and (max-width: 1199px) {
    ${args}
  }
`

export const mobileQuery = (...args: any[]) => css`
  @media (max-width: 599px) {
    ${args}
  }
`
