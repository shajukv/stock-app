import * as Styled from './ticker.styles'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect, useCallback } from 'react'
import { setSelectedTradingPair } from '../../../redux/slices/tickers/tickerslistSlice'
import { withTheme } from '@emotion/react'
import { useHistory } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import { formatText, getColor } from '../../../helper/_helper'
import { PageRoutes } from '../../../config/_config'
export const Ticker = ({ ticker, id, handleActive, activeIndex }) => {
  const selectedTradingPair = useSelector(
    (state) => state.tickerslist.selectedTradingPair
  )
  const dispatch = useDispatch()
  const history = useHistory()
  const activeStyle = {
    backgroundColor: 'rgba(1, 167, 129, 0.114)',
    borderLeft: '7px solid rgba(100, 100, 100)',
  }

  const handleSubmit = (e, ticker) => {
    handleActive(e)
    dispatch(setSelectedTradingPair(ticker[0]))
    if (isMobile) {
      history.push(`/${PageRoutes.trading}`)
    }
  }

  return (
    <Styled.Ticker
      onClick={(e) => handleSubmit(e, ticker)}
      style={activeIndex === id ? activeStyle : {}}
      id={id}
    >
      <Styled.TickerTitle>{ticker && formatText(ticker[0])}</Styled.TickerTitle>
      <Styled.TickerSubTitle>
        <span>{new Intl.NumberFormat().format(ticker[7])}</span>
        <span id="rightSpan" style={getColor(ticker[5])}>{`${
          ticker[5] > 0 ? ticker[5].toFixed(2) : ticker[5]
        }`}</span>{' '}
      </Styled.TickerSubTitle>
    </Styled.Ticker>
  )
}
