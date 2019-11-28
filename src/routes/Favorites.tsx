/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { List } from '../components/List'
import { ListItem } from '../components/ListItem'
import { Image, Photo } from '../components/Image'

const favoritesObjToArr = (obj: any) =>
  Object.keys(obj).map((key: string) => obj[key])

export const Favorites: React.FC = () => {
  const [photos, setPhotos] = React.useState([]) as any[]

  React.useEffect(() => {
    const favorites = localStorage.getItem('favorites')
    if (favorites) {
      const favoritesParsed = JSON.parse(favorites)
      const favoritesArray = favoritesObjToArr(favoritesParsed)
      setPhotos(favoritesArray)
    }
  }, [])

  return (
    <div style={{ marginTop: 104 }}>
      <List>
        {photos.length > 0 ? (
          photos.map((photo: Photo) => (
            <ListItem key={photo.id}>
              <Image photo={photo} />
            </ListItem>
          ))
        ) : (
          <p style={{ padding: 24 }}>
            Add some favorites photos first to see them here.
          </p>
        )}
      </List>
    </div>
  )
}
