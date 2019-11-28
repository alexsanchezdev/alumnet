import styled from '@emotion/styled'
import {
  desktopQuery,
  tabletQuery,
  mobileQuery,
} from '../../utils/styles.utils'

export const Layout = styled.main`
  ${desktopQuery`
      margin-top: 104px;
    `};
  ${tabletQuery`
      margin-top: 76px;
    `};
  ${mobileQuery`
      margin-top: 69px;
    `};
`

export const Message = styled.span`
  padding: 24px;
`
