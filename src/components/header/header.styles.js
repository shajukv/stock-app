import styled from '@emotion/styled'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
`
export const Title = styled.h1`
  color: #fff;
  display: flex;
  margin-bottom: 0px;
  font-weight: bold;
  font-family: serif;
`
export const SubTitle = styled.p`
  margin-top: 3px;
  font-family: ui-monospace;
  font-size: 14px;
  color: slategrey;
`

export const Line = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`
