import * as Styled from './tradeChannel.styles'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetChannelMessagesQuery } from '../../../api/websocket/channelApiSlice'
import { setSelectedTradeChannelMessage } from '../../../redux/slices/channel/channelSlice'
import { getFinalTradeChannelMessages } from '../../../api/_dataUtils'
import loaderImage from '../../../images/load.svg'
import { Error } from '../../error/Error'
import * as CommonStyled from '../../../style/common.styles'
import {
  getLocalTime,
  getTradingPairCurrencyCode,
} from '../../../helper/_helper'

export const TradeChannel = ({}) => {
  const selectedTradingPair = useSelector(
    (state) => state.tickerslist.selectedTradingPair
  )
  const message = {
    event: 'subscribe',
    channel: 'trades',
    symbol: selectedTradingPair,
  }
  const { isLoading, error, data } = useGetChannelMessagesQuery(message)
  const tradeChannel = useSelector((state) => state.channel.tradeChannel)
  const dispatch = useDispatch()
  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      dispatch(
        setSelectedTradeChannelMessage(getFinalTradeChannelMessages(data))
      )
    }
  }, [isLoading, data, selectedTradingPair])

  if (isLoading || (data && !tradeChannel)) {
    return (
      <CommonStyled.Loader>
        <img src={loaderImage} width="30" height="30" alt="" />
      </CommonStyled.Loader>
    )
  }
  if (error) return <Error error={error} />

  return (
    <Styled.TradeChannelTable>
      {tradeChannel && Object.keys(tradeChannel).length > 0 && (
        <Styled.TradeChannelTableItemWrap>
          <Styled.TradeChannelTableItemRow>
            <Styled.TradeChannelItemRowHeadingTitle>
              TRADES &#8595;
            </Styled.TradeChannelItemRowHeadingTitle>
          </Styled.TradeChannelTableItemRow>
          <Styled.TradeChannelTableItemRow>
            <Styled.TradeChannelItemRowHeading>
              AMOUNT ({getTradingPairCurrencyCode(selectedTradingPair)[0]})
            </Styled.TradeChannelItemRowHeading>
            <Styled.TradeChannelItemRowHeading>
              PRICE ({getTradingPairCurrencyCode(selectedTradingPair)[1]})
            </Styled.TradeChannelItemRowHeading>
            <Styled.TradeChannelItemRowHeading>
              TIME
            </Styled.TradeChannelItemRowHeading>
          </Styled.TradeChannelTableItemRow>
          {Object.values(tradeChannel[0]).map((item, index) => {
            return (
              <Styled.TradeChannelTableItemRow key={item?.ID} id={item?.ID}>
                <Styled.TradeChannelItemRowTitle>
                  {' '}
                  {item?.AMOUNT}
                </Styled.TradeChannelItemRowTitle>
                <Styled.TradeChannelItemRowTitle>
                  {' '}
                  {item?.PRICE}
                </Styled.TradeChannelItemRowTitle>
                <Styled.TradeChannelItemRowTitle>
                  {' '}
                  {getLocalTime(item?.MTS)}
                </Styled.TradeChannelItemRowTitle>
              </Styled.TradeChannelTableItemRow>
            )
          })}
        </Styled.TradeChannelTableItemWrap>
      )}
    </Styled.TradeChannelTable>
  )
}
