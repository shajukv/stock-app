import * as Styled from './header.styles'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import * as h from '../../helper/_helper'
export const Header = () => {
  const [activeTab, setActiveTab] = useContext(AppContext)

  const title = h.getTitle(activeTab)

  return (
    <>
      <Styled.Header>
        <Styled.Title>Trending</Styled.Title>
        <Styled.SubTitle>{title}</Styled.SubTitle>
      </Styled.Header>
      <Styled.Line />
    </>
  )
}
