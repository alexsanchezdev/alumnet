import * as React from 'react'
import { ListStyled } from './List.styles'

export const List: React.FC = ({ children }) => {
  return <ListStyled>{children}</ListStyled>
}
