/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Search } from '../Search/Search'
import styled from '@emotion/styled'
import css from '@emotion/css'
import { Link, useLocation } from 'react-router-dom'
import { StoreContext } from '../Store/Store'

const transitionConfig = css`
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 104px;

  display: flex;
  align-items: center;
  background-color: #eceff1;
  z-index: 100;
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

  ${transitionConfig};

  :hover,
  :focus {
    background-color: #2b2b2b;
    color: white;
  }
`

export const Navigation: React.FC = () => {
  const store = React.useContext(StoreContext)
  const { pathname } = useLocation()
  React.useEffect(() => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
      const favoritesParsed = JSON.parse(favorites)
      store.setFavoritesCount(Object.keys(favoritesParsed).length)
    }
  }, [])

  return (
    <Container>
      <Search />
      <FavoritesLink to="/favorites">
        Favorites ({store.favoritesCount})
      </FavoritesLink>
      {pathname === '/' && (
        <p style={{ paddingLeft: 24, paddingRight: 24 }}>
          {store.isSearching
            ? 'Searching...'
            : `Showing ${store.photosCount} of ${store.totalPhotosCount} total images`}
        </p>
      )}
    </Container>
  )
}
