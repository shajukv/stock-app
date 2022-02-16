import styled from '@emotion/styled'

export const Ticker = styled.div`
  background: #172d3e;
  max-width: 170px;
  min-height: 50px;
  align-items: center;
  justify-content: center;

  border-radius: 5px 5px 5px 5px;
  div {
    padding: 10px;
  }
  &:hover > div {
    cursor: pointer;
    background-color: rgba(1, 167, 129, 0.114);
  }
  @media (min-width: 481px) {
    max-width: 185px;
  }
`
export const TickerTitle = styled.div`
  h3 {
    font-weight: bold;
  }
`
export const TickerSubTitle = styled.div`
  span {
    color: green;
    &:nth-of-type(2) {
      float: right;
    }
  }
`
