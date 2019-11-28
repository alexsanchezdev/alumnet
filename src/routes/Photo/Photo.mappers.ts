import { PhotoGetInfoDTO } from '../../api/dtos'
import { PhotoInfoModel } from './Photo.model'

export const photoGetInfoDTOToPhotoGetInfoModel = (
  photo: PhotoGetInfoDTO
): PhotoInfoModel => ({
  id: photo.id,
  title: photo.title._content,
  date: new Date(photo.dateuploaded * 1000).toLocaleString(),
  user: photo.owner.username,
  url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
})
