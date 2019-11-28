import React from 'react'
import { fireEvent } from '@testing-library/react'
import { SearchInput } from './SearchInput.view'
import { render } from '../../utils/test.utils'
import { createMemoryHistory } from 'history'

test('it should be input type text', () => {
  const { getByLabelText } = render(<SearchInput />)
  const input = getByLabelText(/tags-input/i) as HTMLInputElement
  expect(input.type).toBe('text')
})

test('it should update search value', () => {
  const { getByLabelText } = render(<SearchInput />)
  const input = getByLabelText(/tags-input/i) as HTMLInputElement
  fireEvent.change(input, { target: { value: 'cars' } })
  expect(input.value).toBe('cars')
})

test('it should update url with query on submit', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  const { getByTestId, getByLabelText } = render(<SearchInput />, {
    history,
  })
  const form = getByTestId(/form/i)
  const input = getByLabelText(/tags-input/i) as HTMLInputElement
  fireEvent.change(input, { target: { value: 'cars' } })
  fireEvent.submit(form)
  expect(history.location.search).toBe('?search=cars')
})

test('it should not update url with query on submit', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  const { getByTestId } = render(<SearchInput />, {
    history,
  })
  const form = getByTestId(/form/i)
  fireEvent.submit(form)
  expect(history.location.search).toBe('')
})
