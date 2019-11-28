export interface PhotoSearchDTO {
  id: string
  title: string
  farm: string
  secret: string
  server: string
}

export interface PhotoGetInfoDTO {
  id: string
  farm: string
  secret: string
  server: string
  owner: { username: string }
  title: { _content: string }
  dateuploaded: number
}
