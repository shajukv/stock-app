import styled from '@emotion/styled'

export const Search = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 100px;
`
export const SearchTerm = styled.input`
  width: 38%;
  border: 1px solid #d8e8fd;
  border-right: none;
  padding: 10px;
  height: 45px;
  border-radius: 20px 0 0 20px;
  outline: none;
  background-color: #4b7dd1;
  color: #d8e8fd;
  font-size: 20px;
  &:focus {
    color: #fff;
  }
  ::placeholder {
    color: #d8e8fd;
    opacity: 0.5;
    text-align: center;
  }
`
export const SearchButton = styled.button`
  width: 40px;
  height: 45px;
  border: 1px solid #d8e8fd;
  border-left: 0px;
  background: #4b7dd1;
  text-align: center;
  color: #fff;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  font-size: 20px;
`
