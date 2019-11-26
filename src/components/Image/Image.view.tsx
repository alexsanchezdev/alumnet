import * as React from 'react'
import { Photo } from './Image.model'
import { Container, Image, Overlay, Title } from './Image.styles'

interface Props {
  photo: Photo
}

const ImageComponent: React.FC<Props> = ({ photo }) => {
  return (
    <Container>
      <Image
        alt={photo.title}
        src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg `}
      />
      <Overlay>
        <Title>{photo.title}</Title>
      </Overlay>
    </Container>
  )
}

export { ImageComponent as Image }
