import * as Styled from './tickerChannel.styles'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import loaderImage from '../../../images/load.svg'
import * as CommonStyled from '../../../style/common.styles'
import { Error } from '../../error/Error'
import { useHistory } from 'react-router-dom'
import { useGetChannelMessagesQuery } from '../../../api/websocket/channelApiSlice'
import { setSelectedTickerChannelMessage } from '../../../redux/slices/channel/channelSlice'
import { getFinalTickerChannelMessages } from '../../../api/_dataUtils'
import { TickerChannelItem } from '../TickerChannelItem/TickerChannelItem'
import { formatText } from '../../../helper/_helper'
import { isMobile } from 'react-device-detect'
export const TickerChannel = ({}) => {
  const selectedTradingPair = useSelector(
    (state) => state.tickerslist.selectedTradingPair
  )
  const history = useHistory()
  const message = {
    event: 'subscribe',
    channel: 'ticker',
    symbol: selectedTradingPair,
  }
  const { isLoading, error, data } = useGetChannelMessagesQuery(message)
  const tickerChannel = useSelector((state) => state.channel.tickerChannel)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      dispatch(
        setSelectedTickerChannelMessage(getFinalTickerChannelMessages(data))
      )
    }
  }, [isLoading, data, selectedTradingPair])

  const handleBack = () => {
    if (isMobile) {
      history.push('/')
    }
  }

  if (isLoading || (data && !tickerChannel)) {
    return (
      <CommonStyled.Loader>
        <img src={loaderImage} width="30" height="30" alt="" />
      </CommonStyled.Loader>
    )
  }
  if (error) return <Error error={error} />
  return (
    <Styled.TikerChannelTable>
      {tickerChannel && Object.keys(tickerChannel).length > 1 && (
        <Styled.Title>
          {isMobile && <span onClick={handleBack}>&larr; &nbsp;</span>}
          {selectedTradingPair && formatText(selectedTradingPair)}
        </Styled.Title>
      )}
      {tickerChannel && Object.keys(tickerChannel).length > 1 && (
        <TickerChannelItem tickerChannelItem={tickerChannel} />
      )}
    </Styled.TikerChannelTable>
  )
}
