import { Link } from 'react-router-dom'
import { useState, useCallback } from 'react'
import * as Styled from './nav.styles'
export const Nav = () => {
  const [isActive, setIsActive] = useState('repo')
  const handleClick = useCallback(
    (e) => {
      setIsActive(e.target.id)
    },
    [isActive]
  )

  return (
    <>
      <Styled.NavTab>
        <Styled.NavList>
          <Link
            to="/repos"
            onClick={handleClick}
            className={`${isActive === 'repo' ? 'active' : ''}`}
          >
            <Styled.NavLink
              id="repo"
              active={`${isActive === 'repo' ? 'active' : ''}`}
              left={true}
            >
              Repositories
            </Styled.NavLink>
          </Link>

          <Link
            to="/devs"
            onClick={handleClick}
            className={`${isActive === 'dev' ? 'active' : ''}`}
          >
            <Styled.NavLink
              id="dev"
              active={`${isActive === 'dev' ? 'active' : ''}`}
            >
              Developers
            </Styled.NavLink>
          </Link>
        </Styled.NavList>
      </Styled.NavTab>
    </>
  )
}
