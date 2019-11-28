import * as React from 'react'
import styled from '@emotion/styled'
import {
  mobileQuery,
  tabletQuery,
  desktopQuery,
} from '../../../utils/styles.utils'

const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;

  ${mobileQuery`
    flex-basis: calc(100% / 1);
  `}

  ${tabletQuery`
    flex-basis: calc(100% / 2);
  `}

  ${desktopQuery`
    flex-basis: calc(100% / 4);
  `}
`

const ListItemComponent: React.FC = ({ children }) => {
  return <ListItem>{children}</ListItem>
}

export { ListItemComponent as ListItem }
