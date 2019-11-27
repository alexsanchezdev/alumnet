import React from 'react'
import { useParams } from 'react-router-dom'
import { FlickrAPIClient } from '../utils/APIClient'
import styled from '@emotion/styled'
import css from '@emotion/css'

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
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
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
  const [photoInfo, setPhotoInfo] = React.useState()
  const [favorite, setFavorite] = React.useState()

  React.useEffect(() => {
    FlickrAPIClient.get('/', {
      method: 'flickr.photos.getInfo',
      photo_id: id,
    }).then((data: any) => setPhotoInfo(data.photo))
  }, [id])

  React.useEffect(() => {
    const favorites = localStorage.getItem('favorites')
    if (id) {
      if (favorites) {
        const favoritesArray = JSON.parse(favorites) as string[]
        if (favoritesArray.includes(id)) {
          setFavorite(true)
          return
        }
      }
      setFavorite(false)
    }
  }, [id])

  const addToFavorites = () => {
    const favorites = localStorage.getItem('favorites')
    if (id) {
      if (favorites) {
        const favoritesArray = JSON.parse(favorites) as string[]
        if (favoritesArray.includes(id)) {
          return
        }
        localStorage.setItem(
          'favorites',
          JSON.stringify([...favoritesArray, id])
        )
      } else {
        localStorage.setItem('favorites', JSON.stringify([id]))
      }
    }
    setFavorite(true)
  }

  const removeFromFavorites = () => {
    const favorites = localStorage.getItem('favorites')
    if (id) {
      if (favorites) {
        const favoritesArray = JSON.parse(favorites) as string[]
        if (favoritesArray.includes(id)) {
          const filteredFavorites = favoritesArray.filter(value => value !== id)
          localStorage.setItem('favorites', JSON.stringify(filteredFavorites))
        }
      }
    }
    setFavorite(false)
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
            {favorite ? (
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
