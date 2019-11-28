import * as React from 'react'
import styled from '@emotion/styled'

const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-basis: calc(100% / 1);

  @media (min-width: 500px) and (max-width: 799px) {
    flex-basis: calc(100% / 2);
  }

  @media (min-width: 800px) and (max-width: 1199px) {
    flex-basis: calc(100% / 4);
  }

  @media (min-width: 1200px) {
    flex-basis: calc(100% / 5);
  }
`

const ListItemComponent: React.FC = ({ children }) => {
  return <ListItem>{children}</ListItem>
}

export { ListItemComponent as ListItem }
