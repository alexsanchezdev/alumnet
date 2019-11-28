/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { FavoritesView } from './Favorites.view'
import { favoritesObjToArr } from './Favorites.mappers'
import { photoSearchDTOToPhotoSearchModel } from '../Search/Search.mappers'

export const FavoritesContainer: React.FC = () => {
  const [photos, setPhotos] = React.useState([]) as any[]

  React.useEffect(() => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
      const favoritesParsed = JSON.parse(favorites)
      const favoritesArray = favoritesObjToArr(favoritesParsed)
      setPhotos(favoritesArray)
    }
  }, [])

  return <FavoritesView photos={photoSearchDTOToPhotoSearchModel(photos)} />
}
