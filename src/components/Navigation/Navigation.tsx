/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Search } from '../Search/Search'
import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'
import { StoreContext } from '../Store/Store'

const Container = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #eceff1;
  z-index: 100;
`

const FavoritesLink = styled(Link)`
  font-size: 16px;
  outline: none;
  color: #2c2c2c;
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
      {pathname !== '/favorites' && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexBasis: '100%',
            padding: 24,
            paddingTop: 0,
          }}
        >
          <FavoritesLink to="/favorites">
            Show favorites ({store.favoritesCount})
          </FavoritesLink>
          {pathname === '/' && (
            <span>
              {store.isSearching
                ? 'Searching...'
                : `Showing ${store.photosCount} of ${store.totalPhotosCount} total images`}
            </span>
          )}
        </div>
      )}
    </Container>
  )
}
