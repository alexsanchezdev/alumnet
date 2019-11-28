/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {
  Container,
  Card,
  Button,
  Image,
  PhotoInformation,
} from './Photo.styles'
import { PhotoInfoModel } from './Photo.model'

interface Props {
  photo: PhotoInfoModel
  isFavorite: boolean
  onAddFavorite: () => void
  onDeleteFavorite: () => void
}

export const PhotoView: React.FC<Props> = ({
  photo,
  isFavorite,
  onDeleteFavorite,
  onAddFavorite,
}) => {
  return (
    <Container>
      {photo && (
        <Card>
          <Image alt={photo.title} src={photo.url} />
          <PhotoInformation>
            <h3>{photo.title}</h3>
            <p>
              Uploaded by {photo.user} on {photo.date}
            </p>
            {isFavorite ? (
              <Button onClick={onDeleteFavorite}>Delete from favorites</Button>
            ) : (
              <Button onClick={onAddFavorite}>Add to favorites</Button>
            )}
          </PhotoInformation>
        </Card>
      )}
    </Container>
  )
}
