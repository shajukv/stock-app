import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const tickerslistSlice = createSlice({
  name: 'tickerslist',
  initialState,
  reducers: {
    setTickersList: (state, action) => {
      return {
        ...state,
        tickers: { ...action.payload },
      }
    },
    setSelectedTradingPair: (state, action) => {
      return {
        ...state,
        selectedTradingPair: action.payload,
      }
    },
  },
})

export const { setTickersList, setSelectedTradingPair } =
  tickerslistSlice.actions

export default tickerslistSlice.reducer
