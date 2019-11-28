import * as React from 'react'
import {
  Container,
  Image,
  Overlay,
  Title,
  StateMessage,
} from './ListImage.styles'
import { PhotoSearchModel } from '../../../routes/Search/Search.model'

interface Props {
  photo: PhotoSearchModel
}

export const ListImage: React.FC<Props> = ({ photo }) => {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)

  const hideLoading = () => {
    setLoading(false)
  }

  const showError = () => {
    setError(true)
    setLoading(false)
  }

  return (
    <Container
      to={`/photo/${photo.id}`}
      style={{ pointerEvents: error ? 'none' : 'all' }}
    >
      {loading && <StateMessage>Loading...</StateMessage>}
      {error && <StateMessage>Failed to load image.</StateMessage>}
      {!error && (
        <>
          <Image
            alt={photo.title}
            src={photo.url}
            onLoad={hideLoading}
            onError={showError}
          />
          <Overlay>
            <Title>{photo.title}</Title>
          </Overlay>
        </>
      )}
    </Container>
  )
}
