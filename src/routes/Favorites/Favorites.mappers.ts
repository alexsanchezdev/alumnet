import { PhotoGetInfoDTO } from '../../api/dtos'
import { PhotoSearchModel } from '../Search/Search.model'

export const favoritesObjToArr = (obj: any) =>
  Object.keys(obj).map((key: string) => obj[key])

export const photoGetInfoDTOToPhotoSearchModel = (
  photos: PhotoGetInfoDTO[]
): PhotoSearchModel[] => {
  return photos.map((photo: PhotoGetInfoDTO) => ({
    id: photo.id,
    title: photo.title._content,
    url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
  }))
}
