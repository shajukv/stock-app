import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setSelectedTickerChannelMessage: (state, action) => {
      return {
        ...state,
        tickerChannel: { ...action.payload },
      }
    },
    setSelectedTradeChannelMessage: (state, action) => {
      return {
        ...state,
        tradeChannel: { ...action.payload },
      }
    },
  },
})

export const {
  setSelectedTickerChannelMessage,
  setSelectedTradeChannelMessage,
} = channelSlice.actions

export default channelSlice.reducer
