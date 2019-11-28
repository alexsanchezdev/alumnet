/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { StoreContext } from '../../components/Store/Store.context'
import { useParams } from 'react-router-dom'
import { FlickrAPIClient } from '../../api/client'
import { PhotoView } from './Photo.view'
import { photoGetInfoDTOToPhotoGetInfoModel } from './Photo.mappers'

export const PhotoContainer: React.FC = () => {
  const { id } = useParams()
  const store = React.useContext(StoreContext)
  const [photo, setPhoto] = React.useState()
  const [isFavorite, setIsFavorite] = React.useState()

  React.useEffect(() => {
    FlickrAPIClient.get('/', {
      method: 'flickr.photos.getInfo',
      photo_id: id,
    }).then((data: any) => setPhoto(data.photo))
  }, [])

  React.useEffect(() => {
    const favorites = localStorage.getItem('favorites')
    if (favorites && id) {
      const favoritesParsed = JSON.parse(favorites)
      if (favoritesParsed[id]) {
        setIsFavorite(true)
        return
      }
    }
    setIsFavorite(false)
  }, [])

  const addFavorite = () => {
    const favorites = localStorage.getItem('favorites')
    if (id) {
      const favoriteData = {
        [id]: {
          id,
          farm: photo.farm,
          title: photo.title._content,
          server: photo.server,
          secret: photo.secret,
        },
      }
      if (favorites) {
        const favoritesObj = JSON.parse(favorites)
        const newFavorites = {
          ...favoritesObj,
          ...favoriteData,
        }
        localStorage.setItem('favorites', JSON.stringify(newFavorites))
      } else if (!favorites) {
        localStorage.setItem('favorites', JSON.stringify(favoriteData))
      }
      store.setFavoritesCount(store.favoritesCount + 1)
      setIsFavorite(true)
    }
  }

  const deleteFavorite = () => {
    const favorites = localStorage.getItem('favorites')
    if (id) {
      if (favorites) {
        const favoritesParsed = JSON.parse(favorites)
        if (favoritesParsed[id]) {
          delete favoritesParsed[id]
          localStorage.setItem('favorites', JSON.stringify(favoritesParsed))
          store.setFavoritesCount(store.favoritesCount - 1)
          setIsFavorite(false)
        }
      }
    }
  }

  if (!photo) {
    return null
  }

  return (
    <PhotoView
      photo={photoGetInfoDTOToPhotoGetInfoModel(photo)}
      isFavorite={isFavorite}
      onAddFavorite={addFavorite}
      onDeleteFavorite={deleteFavorite}
    />
  )
}
