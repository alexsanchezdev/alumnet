import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { Home } from './routes/Home'
import { NotFound } from './routes/NotFound'
import { Photo } from './routes/Photo'
import { Navigation } from './components/Navigation/Navigation'
import { StoreProvider } from './components/Store/Store'

const App: React.FC = () => (
  <StoreProvider>
    <Router>
      <Navigation />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/photo/:id">
          <Photo />
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
