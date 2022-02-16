import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const TradeChannelTable = styled.div`
  margin: 10px;
  margin-top: 0px;
`
export const TradeChannelTableItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, calc(100%));
  row-gap: 5px;
  column-gap: 0px;
  color: white;
  padding: 10px;
  background: #172d3e;
  min-width: 40%;
  min-height: 200px;
  border-radius: 3px 3px 3px 3px;
  max-height: 350px;
  overflow: scroll;
`

export const TradeChannelTableItemRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3));
  min-height: 10px;

  &:hover > div {
    cursor: pointer;
    background-color: rgb(40, 68, 91);
  }
`
export const TradeChannelItemRow = styled.div`
  padding: 10px;
`
export const TradeChannelItemRowHeading = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 12px;
`
export const TradeChannelItemRowHeadingTitle = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 12px;
  background: #172d3e;
  color: #fff;
`

export const TradeChannelItemRowTitle = styled.div`
  font-size: 11px;
`
