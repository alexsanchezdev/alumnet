/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useParams } from 'react-router-dom'
import { FlickrAPIClient } from '../utils/APIClient'
import styled from '@emotion/styled'
import css from '@emotion/css'
import { StoreContext } from '../components/Store/Store'

const transitionConfig = css`
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 56px;
`

const Card = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 24px;
  margin: 0 auto;
  background-color: white;
  border-radius: 8px;
`

const Button = styled.button`
  border: none;
  background-color: transparent;
  border: 1px solid black;
  padding: 6px 12px;
  outline: none;
  cursor: pointer;
  font-size: 14px;

  ${transitionConfig};

  :hover,
  :focus {
    background-color: #2b2b2b;
    color: white;
  }
`

export const Photo: React.FC = () => {
  const { id } = useParams()
  const store = React.useContext(StoreContext)
  const [photoInfo, setPhotoInfo] = React.useState()
  const [isFavorite, setIsFavorite] = React.useState()

  React.useEffect(() => {
    FlickrAPIClient.get('/', {
      method: 'flickr.photos.getInfo',
      photo_id: id,
    }).then((data: any) => setPhotoInfo(data.photo))
  }, [id])

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

  const addToFavorites = () => {
    const favorites = localStorage.getItem('favorites')
    if (id) {
      const favoriteData = {
        [id]: {
          id,
          farm: photoInfo.farm,
          title: photoInfo.title._content,
          server: photoInfo.server,
          secret: photoInfo.secret,
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

  const removeFromFavorites = () => {
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

  return (
    <Container>
      {photoInfo && (
        <Card>
          <img
            style={{ width: '100%', height: 'auto', maxWidth: 800 }}
            alt={photoInfo.title._content}
            src={`https://farm${photoInfo.farm}.staticflickr.com/${photoInfo.server}/${photoInfo.id}_${photoInfo.secret}.jpg `}
          />
          <div style={{ width: '100%' }}>
            <h3>{photoInfo.title._content}</h3>
            <p>
              Uploaded by {photoInfo.owner.username} on{' '}
              {new Date(photoInfo.dateuploaded * 1000).toLocaleString()}
            </p>
            {isFavorite ? (
              <Button onClick={removeFromFavorites}>
                Delete from favorites
              </Button>
            ) : (
              <Button onClick={addToFavorites}>Add to favorites</Button>
            )}
          </div>
        </Card>
      )}
    </Container>
  )
}
