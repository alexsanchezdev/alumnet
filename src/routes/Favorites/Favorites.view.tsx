/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { List, ListItem, ListImage } from '../../components/List'
import { Layout, Message } from './Favorites.styles'
import { PhotoSearchModel } from '../Search/Search.model'

interface Props {
  photos: PhotoSearchModel[]
}

export const FavoritesView: React.FC<Props> = ({ photos }) => {
  return (
    <Layout>
      <List>
        {photos.length > 0 ? (
          photos.map((photo: PhotoSearchModel) => (
            <ListItem key={photo.id}>
              <ListImage photo={photo} />
            </ListItem>
          ))
        ) : (
          <Message>Add some favorites photos first to see them here.</Message>
        )}
      </List>
    </Layout>
  )
}
