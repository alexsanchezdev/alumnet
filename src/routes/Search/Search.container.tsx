/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { FlickrAPIClient } from '../../api/client'
import { StoreContext } from '../../components/Store/Store'
import { useQuery } from '../../utils/router.utils'
import { SearchView } from './Search.view'
import { photoSearchDTOToPhotoSearchModel } from './Search.mappers'

export const SearchContainer: React.FC = () => {
  const search = useQuery().get('search') as string
  const store = React.useContext(StoreContext)
  const [photos, setPhotos] = React.useState([])
  const [currentPage, setCurrentPage] = React.useState(1)

  React.useEffect(() => {
    if (search) {
      setCurrentPage(1)
      fetchPhotos(search, 1)
        .then(data => {
          store.setPhotosCount(data.photos.photo.length, data.photos.total)
          setPhotos(data.photos.photo)
        })
        .catch(error => alert('Something went wrong!'))
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

  const onLoadMore = () => {
    const nextPage = currentPage + 1
    fetchPhotos(search, nextPage).then(data => {
      const newPhotos = photos.concat(data.photos.photo)
      store.setPhotosCount(newPhotos.length, data.photos.total)
      setPhotos(newPhotos)
      setCurrentPage(nextPage)
    })
  }

  return (
    <SearchView
      photos={photoSearchDTOToPhotoSearchModel(photos)}
      onLoadMore={onLoadMore}
    />
  )
}
