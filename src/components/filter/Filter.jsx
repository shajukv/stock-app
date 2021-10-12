import * as h from '../../helper/_helper'
import * as Styled from './filter.styles'
import { GoChevronDown, GoTriangleDown } from 'react-icons/go/'
export const Filter = ({ title }) => {
  return (
    <>
      <Styled.Filter>
        <Styled.Select>
          <option value="1">{title}</option>
        </Styled.Select>
        <GoTriangleDown size={11} />
      </Styled.Filter>
    </>
  )
}
