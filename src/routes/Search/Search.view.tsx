/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { List, ListImage, ListItem } from '../../components/List'
import { LoadMore } from '../../components/LoadMore'
import { StoreContext } from '../../components/Store/Store'
import { Layout, Message } from './Search.styles'
import { PhotoSearchModel } from './Search.model'

interface Props {
  photos: PhotoSearchModel[]
  onLoadMore: () => void
}

export const SearchView: React.FC<Props> = ({ photos, onLoadMore }) => {
  const store = React.useContext(StoreContext)
  return (
    <Layout>
      <List>
        {photos.length > 0 ? (
          photos.map((photo: PhotoSearchModel, index: number) => (
            <ListItem key={index}>
              <ListImage photo={photo} />
            </ListItem>
          ))
        ) : (
          <Message>
            {!store.isSearching
              ? 'Search a tag or multiples tags (separated by comma) to show results.'
              : 'Loading...'}
          </Message>
        )}
      </List>
      {store.photosCount < store.totalPhotosCount && photos.length > 0 && (
        <LoadMore onLoadMore={onLoadMore} />
      )}
    </Layout>
  )
}
