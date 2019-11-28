import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { Search } from './routes/Search'
import { NotFound } from './routes/NotFound'
import { Photo } from './routes/Photo'
import { Navigation } from './components/Navigation'
import { StoreProvider } from './components/Store/Store'
import { Favorites } from './routes/Favorites'

const App: React.FC = () => (
  <StoreProvider>
    <Router>
      <Navigation />
      <Switch>
        <Route exact={true} path="/">
          <Search />
        </Route>
        <Route path="/photo/:id">
          <Photo />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  </StoreProvider>
)

export default App
