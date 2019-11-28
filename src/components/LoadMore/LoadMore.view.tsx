import React from 'react'
import { StoreContext } from '../Store'
import { Container, Button } from './LoadMore.styles'

interface Props {
  onLoadMore: () => void
}

export const LoadMore: React.FC<Props> = ({ onLoadMore }) => {
  const store = React.useContext(StoreContext)
  return (
    <Container>
      {store.isSearching ? (
        <p>Loading... </p>
      ) : (
        <Button onClick={onLoadMore}>Load more</Button>
      )}
    </Container>
  )
}
