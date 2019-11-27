import * as React from 'react'
import { Photo } from './Image.model'
import { Container, Image, Overlay, Title, StateMessage } from './Image.styles'

interface Props {
  photo: Photo
}

const ImageComponent: React.FC<Props> = ({ photo }) => {
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
    <Container isError={error}>
      {loading && <StateMessage>Loading...</StateMessage>}
      {error && <StateMessage>Failed to load image</StateMessage>}
      {!error && (
        <>
          <Image
            alt={photo.title}
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg `}
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

export { ImageComponent as Image }
