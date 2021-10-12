import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import * as Styled from './nav.styles'
import { GoChevronDown, GoTriangleDown } from 'react-icons/go/'
import { AppContext } from '../../context/AppContext'
import { useContext } from 'react'
import * as config from '../../config/_config'
import { Filter } from '../filter/Filter'
export const Nav = () => {
  const [activeTab, setActiveTab] = useContext(AppContext)

  const handleClick = useCallback(
    (e) => {
      setActiveTab(e.target.id)
    },
    [activeTab]
  )

  const NavLink = ({ item, _key, index }) => {
    return (
      <Link
        to={`/${_key}`}
        onClick={handleClick}
        className={`${activeTab === `${_key}` ? 'active' : ''}`}
        key={index}
      >
        <Styled.NavLink
          id={`${_key}`}
          active={`${activeTab === `${_key}` ? 'active' : ''}`}
          left={item?.left}
        >
          {item?.title}
        </Styled.NavLink>
      </Link>
    )
  }

  return (
    <>
      <Styled.NavTab>
        <Styled.NavList>
          {Object.entries(config?.NavTabs).map(([key, val], i) => (
            <NavLink item={val} _key={key} key={i} />
          ))}
        </Styled.NavList>
        <Styled.NavtabRight>
          {activeTab && activeTab === 'repos' && (
            <Filter title="Spoken Language: Any " />
          )}
          <Filter title="Language: Any" />
          <Filter title="Date Range: Today" />
        </Styled.NavtabRight>
      </Styled.NavTab>
    </>
  )
}
