import { store } from '../redux/store'
import { sortData } from '../helper/_helper'

export const getTradingPairData = (data) => {
  const tickersList = data
  const output = tickersList.filter((ticker) => ticker[0].startsWith('t'))
  //console.log(output)
  return output
}

export const getFinalTickerChannelMessages = (data) => {
  const lastTickerChannelMsg = data.slice(-1)
  return Object.values(lastTickerChannelMsg)[0]
}
export const getFinalTradeChannelMessages = (data) => {
  if (data.length > 1) {
    const lastTradeChannelMsg = data.slice(-1)
    return lastTradeChannelMsg
  }
  return data
}

export const tranformTickerChannelMsg = (data) => {
  let tranformedData = {}
  if (
    data &&
    Object.keys(data).length > 0 &&
    Array.isArray(data) &&
    Array.isArray(data[1])
  ) {
    const [
      BID,
      BID_SIZE,
      ASK,
      ASK_SIZE,
      DAILY_CHANGE,
      DAILY_CHANGE_RELATIVE,
      LAST_PRICE,
      VOLUME,
      HIGH,
      LOW,
    ] = data[1]

    tranformedData = {
      BID,
      BID_SIZE,
      ASK,
      ASK_SIZE,
      DAILY_CHANGE,
      DAILY_CHANGE_RELATIVE,
      LAST_PRICE,
      VOLUME,
      HIGH,
      LOW,
    }
  }
  return tranformedData
}

export const tranformTradeChannelMsg = (data, isToPatch = false) => {
  let tranformedData = {}
  if (isToPatch) {
    const state = store.getState()
    const tradeChannel = state.channel.tradeChannel
    let newTradeChannel = { ...tradeChannel }
    const [ID, MTS, AMOUNT, PRICE] = Object.values(data)
    const patchedObj = { ID, MTS, AMOUNT, PRICE }
    const id = patchedObj.ID
    let patchedTradeChannel = {}
    patchedTradeChannel[id] = patchedObj

    tranformedData = { ...tradeChannel[0], ...patchedTradeChannel }
  } else {
    if (data && Object.keys(data).length > 0) {
      Array.isArray(Object.values(data)) &&
        Object.values(data).map((items, index) => {
          const [ID, MTS, AMOUNT, PRICE] = items
          tranformedData[ID] = { ID, MTS, AMOUNT, PRICE }
        })
    }
  }

  //return tranformedData;
  let sortedTransformedData = {}
  sortedTransformedData = sortData(tranformedData)

  return sortedTransformedData
}

export const prepareHeaders = async (headers) => {
  headers.set('Accept', 'application/json')
  headers.set('Content-Type', 'application/json')
  return headers
}
