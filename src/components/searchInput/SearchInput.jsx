import * as Styled from './searchInput.styles'
import { FaSearch } from 'react-icons/fa'
import { useContext, useCallback, useState } from 'react'
import { AppContext } from '../../context/AppContext'
export const SearchInput = ({}) => {
  const [location, setLocation] = useContext(AppContext)
  const [currentLocation, setCurrentLocation] = useState('')
  const handleSearch = useCallback(
    (e) => {
      setLocation(currentLocation)
    },
    [currentLocation, setLocation]
  )
  const handleSearchChange = useCallback((e) => {
    setCurrentLocation(e.target.value)
  }, [])

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        handleSearch()
      }
    },
    [handleSearch]
  )
  return (
    <Styled.Search>
      <Styled.SearchTerm
        type="text"
        placeholder="Location.."
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        value={currentLocation}
      />
      <Styled.SearchButton type="submit" onClick={handleSearch}>
        <FaSearch />
      </Styled.SearchButton>
    </Styled.Search>
  )
}
