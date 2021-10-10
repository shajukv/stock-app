import { Header } from './header/Header'
import { Nav } from './nav/Nav'
import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'

const Repositories = React.lazy(() => import('./repositories/Repositories'))
const Developers = React.lazy(() => import('./developers/Developers'))
export const Home = () => {
  return (
    <>
      <Header />
      <React.Suspense fallback="Loading...">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={Repositories}></Route>
            <Route path="/repos" component={Repositories}></Route>
            <Route path="/devs" component={Developers}></Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </React.Suspense>
    </>
  )
}
