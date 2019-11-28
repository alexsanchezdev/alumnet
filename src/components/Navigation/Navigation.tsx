import React from 'react'
import { Search } from '../Search/Search'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Container = styled.nav`
  display: flex;
  align-items: center;
`

const FavoritesLink = styled(Link)`
  margin: 24px;
  font-size: 16px;
  text-transform: uppercase;
  padding: 8px 16px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #2c2c2c;
  outline: none;
  text-decoration: none;
  color: #2c2c2c;
`

export const Navigation: React.FC = () => {
  const [favoritesCount, setFavoritesCount] = React.useState(0)

  React.useEffect(() => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
      const favoritesParsed = JSON.parse(favorites)
      setFavoritesCount(Object.keys(favoritesParsed).length)
    }
  }, [])
  return (
    <Container>
      <Search />
      <FavoritesLink to="/favorites">
        My favorites ({favoritesCount})
      </FavoritesLink>
    </Container>
  )
}
