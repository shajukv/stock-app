import * as Styled from '../TickerChannel/tickerChannel.styles'
import { useSelector } from 'react-redux'
import { getTradingPairCurrencyCode } from '../../../helper/_helper'
import { getColor } from '../../../helper/_helper'
export const TickerChannelItem = ({ tickerChannelItem }) => {
  const selectedTradingPair = useSelector(
    (state) => state.tickerslist.selectedTradingPair
  )
  return (
    <>
      <Styled.TikerChannelWrap>
        <span>
          {new Intl.NumberFormat().format(tickerChannelItem['LAST_PRICE'])}
        </span>
        <p>
          ~ {getTradingPairCurrencyCode(selectedTradingPair)[1]}
          &nbsp;
          {new Intl.NumberFormat().format(tickerChannelItem['LAST_PRICE'])}
        </p>
      </Styled.TikerChannelWrap>
      <Styled.TikerChannelItemWrap>
        <Styled.TikerChannelItemRow>
          <Styled.TikerChannelItemRowHeading>
            Open Price(0:00 UTC)
          </Styled.TikerChannelItemRowHeading>
          <div>
            {new Intl.NumberFormat().format(tickerChannelItem['LAST_PRICE'])}
          </div>
        </Styled.TikerChannelItemRow>
        <Styled.TikerChannelItemRow>
          <Styled.TikerChannelItemRowHeading>
            Daily chnages(0:00 UTC)
          </Styled.TikerChannelItemRowHeading>
          <div style={getColor(tickerChannelItem['DAILY_CHANGE'])}>
            {tickerChannelItem['DAILY_CHANGE'] > 0
              ? tickerChannelItem['DAILY_CHANGE'].toFixed(2)
              : tickerChannelItem['DAILY_CHANGE']}
          </div>
        </Styled.TikerChannelItemRow>
        <Styled.TikerChannelItemRow>
          <Styled.TikerChannelItemRowHeading>
            Top Bid
          </Styled.TikerChannelItemRowHeading>
          <div style={{ color: '#41CE8E' }}>{tickerChannelItem['BID']}</div>
        </Styled.TikerChannelItemRow>
        <Styled.TikerChannelItemRow>
          <Styled.TikerChannelItemRowHeading>
            Top Ask
          </Styled.TikerChannelItemRowHeading>
          <div style={{ color: '#F56565' }}>{tickerChannelItem['ASK']}</div>
        </Styled.TikerChannelItemRow>
        <Styled.TikerChannelItemRow>
          <Styled.TikerChannelItemRowHeading>
            Last Price
          </Styled.TikerChannelItemRowHeading>
          <div>
            {new Intl.NumberFormat().format(tickerChannelItem['LAST_PRICE'])}
          </div>
        </Styled.TikerChannelItemRow>
      </Styled.TikerChannelItemWrap>
    </>
  )
}
