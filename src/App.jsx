import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import Container from './components/container/Container'
import { Header } from './components/header/Header'
import { Nav } from './components/nav/Nav'
import { GlobalStyle } from './style/GlobalStyle.styles'
import logo from './images/load.svg'
import { Global, css } from '@emotion/react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'

import { AppProvider } from './context/AppContext'

const Repositories = React.lazy(() =>
  import('./components/pages/repositories/Repositories')
)
const Developers = React.lazy(() =>
  import('./components/pages/developers/Developers')
)

const queryClient = new QueryClient()

export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Global styles={GlobalStyle} />
          <Container>
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
          </Container>
        </AppProvider>
      </QueryClientProvider>
    </>
  )
}
