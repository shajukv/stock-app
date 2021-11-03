import axios from 'axios'
import React, { useEffect } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import Container from './components/container/Container'
import { Header } from './components/header/Header'
import { GlobalStyle } from './style/GlobalStyle.styles'
import logo from './images/load.svg'
import { Global, css } from '@emotion/react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { SearchInput } from './components/searchInput/SearchInput'

const WeatherList = React.lazy(() =>
  import('./components/pages/weatherList/WeatherList')
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
            <SearchInput />
            <React.Suspense fallback="Loading...">
              <Router>
                <Switch>
                  <Route path="/" exact component={WeatherList}></Route>
                </Switch>
              </Router>
            </React.Suspense>
          </Container>
        </AppProvider>
      </QueryClientProvider>
    </>
  )
}
