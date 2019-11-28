import styled from '@emotion/styled'
import {
  desktopQuery,
  tabletQuery,
  mobileQuery,
} from '../../utils/styles.utils'

export const Layout = styled.main`
  ${desktopQuery`
      margin-top: 146px;
    `};
  ${tabletQuery`
      margin-top: 116px;
    `};
  ${mobileQuery`
      margin-top: 110px;
    `};
`

export const Message = styled.span`
  padding: 24px;
`
