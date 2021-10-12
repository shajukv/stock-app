import { useState, createContext } from 'react'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [activeTab, setActiveTab] = useState('repos')

  return (
    <AppContext.Provider value={[activeTab, setActiveTab]}>
      {props.children}
    </AppContext.Provider>
  )
}
