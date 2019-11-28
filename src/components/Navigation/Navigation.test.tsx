import React from 'react'
import { render } from '../../utils/test.utils'
import { Navigation } from './Navigation.view'
import 'jest-localstorage-mock'

const favoriteMock = {
  id: {
    id: '',
    date: '',
    title: '',
    user: '',
    url: '',
  },
}

beforeEach(() => {
  localStorage.clear()
})

it('should read favorites from local storage', () => {
  localStorage.setItem('favorites', JSON.stringify(favoriteMock))
  const setFavoritesCount = jest.fn()
  render(<Navigation />, { store: { setFavoritesCount } })
  expect(setFavoritesCount).toHaveBeenCalledWith(1)
})

it('should render searching status', () => {
  const { getByText } = render(<Navigation />, {
    route: '/',
    store: { isSearching: true },
  })
  const span = getByText(/searching.../i)
  expect(span).toBeDefined()
})

it('should call set favorites count', () => {
  localStorage.setItem('favorites', JSON.stringify(favoriteMock))
  const { getByTestId } = render(<Navigation />)
  const anchor = getByTestId(/favorites-link/i)
  expect(anchor.textContent).toBe('Favorites (1)')
})
