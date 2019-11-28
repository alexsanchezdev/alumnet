/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { SearchInput } from '../SearchInput'
import { useLocation } from 'react-router-dom'
import { StoreContext } from '../Store/Store'
import {
  Container,
  FavoritesLink,
  FavoritesPhotoCountContainer,
} from './Navigation.styles'

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
    <header>
      <Container>
        <SearchInput />
        {pathname !== '/favorites' && (
          <FavoritesPhotoCountContainer>
            <FavoritesLink to="/favorites">
              Show favorites ({store.favoritesCount})
            </FavoritesLink>
            {pathname === '/' && (
              <span>
                {store.isSearching
                  ? 'Searching...'
                  : `${store.photosCount} of ${store.totalPhotosCount} images`}
              </span>
            )}
          </FavoritesPhotoCountContainer>
        )}
      </Container>
    </header>
  )
}
