import React from 'react'
import './style.css'
import logo from './images/load.svg'
import { Home } from './components/Home'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()
export const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div id="container">
          <Home />
        </div>
      </QueryClientProvider>
    </>
  )
}
