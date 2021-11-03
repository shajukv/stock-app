import { useState, createContext } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [location, setLocation] = useState(null)
  return (
    <AppContext.Provider value={[location, setLocation]}>
      {props.children}
    </AppContext.Provider>
  )
}
