import React from 'react'
import { render } from '../../utils/test.utils'
import { LoadMore } from './LoadMore.view'
import { fireEvent } from '@testing-library/dom'

it('should show loading status', () => {
  const { getByText } = render(<LoadMore onLoadMore={jest.fn()} />, {
    store: { isSearching: true },
  })
  const paragraph = getByText(/loading.../i)
  expect(paragraph).toBeDefined()
})

it('should show load more button', () => {
  const { getByText } = render(<LoadMore onLoadMore={jest.fn()} />, {
    store: { isSearching: false },
  })
  const button = getByText(/load more/i)
  expect(button).toBeDefined()
})

it('should call onLoadMore', () => {
  const onLoadMore = jest.fn()
  const { getByText } = render(<LoadMore onLoadMore={onLoadMore} />, {
    store: { isSearching: false },
  })
  const button = getByText(/load more/i)
  fireEvent.click(button)
  expect(onLoadMore).toHaveBeenCalledTimes(1)
})
