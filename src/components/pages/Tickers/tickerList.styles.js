import styled from '@emotion/styled'

export const SectionLeft = styled.div`
  min-height: 200px;
  height: 95vh;
  overflow: scroll;
  //border: solid 1px #404243;
  //border-radius: 0px 0 0 0px;
  //border-right: 0px;
`
export const TickersListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(100% / 2));
  row-gap: 7px;
  column-gap: 0px;
  padding: 0px 10px 10px 10px;
  font-size: 13px;
`
