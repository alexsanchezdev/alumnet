import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '../../utils/test.utils'
import { photoGetInfoDTOToPhotoSearchModel } from './Favorites.mappers'

import { FavoritesContainer } from './Favorites.container'
import { FavoritesView } from './Favorites.view'

const favoriteMock = {
  id: {
    id: '',
    date: '',
    title: '',
    user: '',
    url: '',
  },
}

const photoGetInfoDTOMock = {
  id: '',
  date: '',
  title: {
    _content: '',
  },
  url: '',
  farm: '',
  secret: '',
  owner: { username: '' },
  server: '',
  dateuploaded: 1574983224,
}

it('mount without crashing', () => {
  localStorage.setItem('favorites', JSON.stringify(favoriteMock))
  const div = document.createElement('div')
  ReactDOM.render(<FavoritesContainer />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('should convert photo get info dto to photo search model', () => {
  const expected = photoGetInfoDTOToPhotoSearchModel([photoGetInfoDTOMock])
  expect(expected).toEqual([
    { id: '', title: '', url: 'https://farm.staticflickr.com//_.jpg' },
  ])
})

it('should render photos', () => {
  const { getByTestId } = render(
    <FavoritesView photos={[{ id: '1', title: 'test', url: 'localhost' }]} />
  )

  const image = getByTestId('list-image') as HTMLImageElement
  expect(image.alt).toBe('test')
})
