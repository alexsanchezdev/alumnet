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
  const search = useQuery().get('search') as string
  const store = React.useContext(StoreContext)
  const [photos, setPhotos] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)

  React.useEffect(() => {
    if (search) {
      fetchPhotos(search, 1)
        .then(data => {
          store.setPhotosCount(data.photos.photo.length, data.photos.total)
          setPhotos(data.photos.photo)
        })
        .catch(error => console.error(error))
    }
  }, [search])

  const fetchPhotos = (tags: string, page: number) => {
    store.setIsSearching(true)
    return FlickrAPIClient.get('/', {
      method: 'flickr.photos.search',
      sort: 'relevance',
      tags,
      page,
    }).finally(() => store.setIsSearching(false))
  }

  const handleLoadMore = () => {
    const nextPage = currentPage + 1
    fetchPhotos(search, nextPage).then(data => {
      const newPhotos = photos.concat(data.photos.photo)
      store.setPhotosCount(newPhotos.length, data.photos.total)
      setPhotos(newPhotos)
      setCurrentPage(nextPage)
    })
  }

  return (
    <div style={{ marginTop: 146 }}>
      <List>
        {photos.length > 0 ? (
          photos.map((photo: Photo, index: number) => (
            <ListItem key={index}>
              <Image photo={photo} />
            </ListItem>
          ))
        ) : (
          <>
            <p style={{ padding: 24 }}>
              {!store.isSearching
                ? 'Search a tag or multiples tags (separated by comma) to show results.'
                : 'Loading...'}
            </p>
          </>
        )}
      </List>
      {store.photosCount < store.totalPhotosCount && (
        <>
          {store.isSearching ? (
            <p>Loading... </p>
          ) : (
            <button style={{ margin: '24px auto' }} onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </>
      )}
    </div>
  )
}
