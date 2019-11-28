import React from 'react'
// tslint:disable-next-line: no-implicit-dependencies
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { StoreProvider } from '../components/Store'
import { render as rtlRender } from '@testing-library/react'

export const render = (
  ui: any,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: ['/'] }),
    store = {},
    ...renderOptions
  } = {}
) => {
  const Wrapper: React.FC = ({ children }) => (
    <StoreProvider store={{ ...store }}>
      <Router history={history}>{children}</Router>
    </StoreProvider>
  )
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}
