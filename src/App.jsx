import { store } from './redux/store/index'
import { Provider } from 'react-redux'
import React from 'react'
import Container from './components/container/Container'
import { Header } from './components/header/Header'
import { GlobalStyle } from './style/GlobalStyle.styles'
import logo from './images/load.svg'
import { Global, css } from '@emotion/react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Media from 'react-media'
import TickerList from './components/pages/TradingPairs/TradingPairList'
import ChannelsList from './components/pages/Channels/ChannelsList'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Global styles={GlobalStyle} />
        <Container>
          <Header />
          <React.Suspense fallback="Loading...">
            <Media query="(max-width: 480px)">
              {(matches) =>
                matches ? (
                  <Router>
                    <Switch>
                      <Route path="/" exact component={TickerList}></Route>
                      <Route
                        path="/trading"
                        exact
                        component={ChannelsList}
                      ></Route>
                    </Switch>
                  </Router>
                ) : (
                  <>
                    <TickerList />
                    <ChannelsList />
                  </>
                )
              }
            </Media>
          </React.Suspense>
        </Container>
      </Provider>
    </>
  )
}
