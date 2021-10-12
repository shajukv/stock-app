import { Header } from './header/Header'
import { Nav } from './nav/Nav'
import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'
import { AppProvider } from '../context/AppContext'

const Repositories = React.lazy(() => import('./repositories/Repositories'))
const Developers = React.lazy(() => import('./developers/Developers'))
export const Home = () => {
  return (
    <>
      <AppProvider>
        <Header />
        <React.Suspense fallback="Loading...">
          <Router>
            <Nav />
            <Switch>
              <Route path="/" exact component={Repositories}></Route>
              <Route path="/repos" exact component={Repositories}></Route>
              <Route path="/devs" exact component={Developers}></Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </Router>
        </React.Suspense>
      </AppProvider>
    </>
  )
}
