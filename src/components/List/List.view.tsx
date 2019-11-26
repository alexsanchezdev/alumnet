import * as React from 'react'
import styled from '@emotion/styled'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: 0;
  padding: 0;
`

const ListComponent: React.FC = ({ children }) => {
  return <List>{children}</List>
}

export { ListComponent as List }
