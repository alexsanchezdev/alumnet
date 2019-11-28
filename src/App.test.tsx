import React from 'react'
import { render } from './utils/test.utils'
import App from './App'
import { createMemoryHistory } from 'history'

it('render default path', () => {
  const history = createMemoryHistory()
  const { getByText } = render(<App />, {
    history,
    store: { isSearching: false },
  })
  const homeMessage = getByText(
    'Search a tag or multiples tags (separated by comma) to show results.'
  )
  expect(history.location.pathname).toBe('/')
  expect(homeMessage).toBeDefined()
})
