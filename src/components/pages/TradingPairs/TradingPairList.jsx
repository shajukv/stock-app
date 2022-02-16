import * as Styled from './tradingPairsList.styles'

import { config } from '../../../config/_config'
import { useState, useEffect, useContext, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData, getTradingPairData } from '../../../api/_dataUtils'
import { Ticker } from '../Ticker/Ticker'
import { Error } from '../../error/Error'
import loaderImage from '../../../images/load.svg'
import * as CommonStyled from '../../../style/common.styles'
import { setTickersList } from '../../../redux/slices/tickers/tickerslistSlice'
import { setSelectedTradingPair } from '../../../redux/slices/tickers/tickerslistSlice'
import { useGetTickersQuery } from '../../../api/tickersApiSlice'
import { isMobile } from 'react-device-detect'

const TickerList = ({}) => {
  const tickersList = useSelector((state) => state.tickerslist.tickers)
  const selectedTradingPair = useSelector(
    (state) => state.tickerslist.selectedTradingPair
  )
  const dispatch = useDispatch()
  const { isLoading, error, data } = useGetTickersQuery()
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    if (data) {
      dispatch(setTickersList(getTradingPairData(data)))
    }
  }, [data])

  useEffect(() => {
    if (tickersList) {
      if (!isMobile && !selectedTradingPair) {
        dispatch(setSelectedTradingPair(tickersList[0][0]))
      }
    }
  }, [tickersList])

  const handleActive = (e) => {
    const { id } = e.currentTarget
    setActiveIndex(parseInt(id))
  }

  if (isLoading) {
    return (
      <CommonStyled.Loader>
        <img src={loaderImage} width="30" height="30" alt="" />
      </CommonStyled.Loader>
    )
  }
  if (error) return <Error error={error} />

  return (
    <Styled.SectionLeft>
      <Styled.TickersListWrap>
        {tickersList &&
          Object.values(tickersList).map((item, index) => (
            <Ticker
              ticker={item}
              key={index}
              id={index}
              handleActive={handleActive}
              activeIndex={activeIndex}
            />
          ))}
      </Styled.TickersListWrap>
    </Styled.SectionLeft>
  )
}
export default TickerList
