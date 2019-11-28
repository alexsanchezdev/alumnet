import { PhotoSearchDTO } from '../../api/dtos'
import { PhotoSearchModel } from './Search.model'

export const photoSearchDTOToPhotoSearchModel = (
  photos: PhotoSearchDTO[]
): PhotoSearchModel[] => {
  return photos.map((photo: PhotoSearchDTO) => ({
    id: photo.id,
    title: photo.title,
    url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
  }))
}
