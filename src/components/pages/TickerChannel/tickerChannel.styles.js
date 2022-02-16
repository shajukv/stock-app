import styled from '@emotion/styled'

export const TikerChannelTable = styled.div`
  min-width: 40%;
  min-height: 200px;
  padding: 10px 10px 10px 10px;
  font-size: 12.5px;
`

export const TikerChannelItemWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(100% / 2));
  row-gap: 5px;
  column-gap: 0px;
  padding: 0px 0px 10px 10px;
  background: #172d3e;
  border-radius: 3px 3px 3px 3px;
`

export const TikerChannelWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(1, calc(100% / 2));
  padding: 20px;
  background: #172d3e;
  span {
    font-size: 20px;
    color: white;
  }
`

export const TikerChannelItemRow = styled.div`
  padding: 10px;
`
export const TikerChannelItemRowHeading = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #172d3e;
  border-radius: 3px 3px 3px 3px;
  color: #fff;
  margin: 0px 0px 5px 0px;
  min-height: 40px;
`
