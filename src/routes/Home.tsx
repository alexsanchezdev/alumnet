/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Image, Photo } from '../components/Image'
import { List } from '../components/List'
import { ListItem } from '../components/ListItem'
import { FlickrAPIClient } from '../utils/APIClient'
import { useLocation } from 'react-router-dom'
import { StoreContext } from '../components/Store/Store'

const useQuery = () => {
  return new URLSearchParams(useLocation().search.slice(1))
}

export const Home: React.FC = () => {
  const search = useQuery().get('search')
  const store = React.useContext(StoreContext)
  const [photos, setPhotos] = React.useState([])

  React.useEffect(() => {
    store.setIsSearching(true)
    FlickrAPIClient.get('/', {
      method: 'flickr.photos.search',
      sort: 'relevance',
      tags: search || 'cars',
    })
      .then((data: any) => {
        store.setPhotosCount(data.photos.photo.length, data.photos.total)
        setPhotos(data.photos.photo)
      })
      .catch((error: any) => console.error(error))
      .finally(() => store.setIsSearching(false))
  }, [search])

  return (
    <div style={{ marginTop: 104 }}>
      {!store.isSearching && (
        <List>
          {photos.map((photo: Photo) => (
            <ListItem key={photo.id}>
              <Image photo={photo} />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  )
}
