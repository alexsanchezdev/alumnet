/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Image, Photo } from '../components/Image'
import { List } from '../components/List'
import { ListItem } from '../components/ListItem'
import { FlickrAPIClient } from '../utils/APIClient'
import { useLocation } from 'react-router-dom'

const useQuery = () => {
  return new URLSearchParams(useLocation().search.slice(1))
}

export const Home: React.FC = () => {
  const search = useQuery().get('search')
  const [loading, setLoading] = React.useState(false)
  const [photos, setPhotos] = React.useState([])
  const [totalPhotos, setTotalPhotos] = React.useState(0)

  React.useEffect(() => {
    setLoading(true)
    FlickrAPIClient.get('/', {
      method: 'flickr.photos.search',
      sort: 'relevance',
      tags: search || 'cars',
    })
      .then((data: any) => {
        setPhotos(data.photos.photo)
        setTotalPhotos(data.photos.total)
      })
      .catch((error: any) => console.error(error))
      .finally(() => setLoading(false))
  }, [search])

  return (
    <div>
      <p style={{ paddingLeft: 24, paddingRight: 24 }}>
        {loading
          ? 'Searching...'
          : `Showing ${photos.length} of ${totalPhotos} total images`}
      </p>
      {!loading && (
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
