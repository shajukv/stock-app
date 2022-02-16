import { configureStore } from '@reduxjs/toolkit'
import tickerslistReducer from '../slices/tickers/tickerslistSlice'
import { tickersApi } from '../../api/tickersApiSlice'
import { channelApi } from '../../api/websocket/channelApiSlice'
import channelReducer from '../slices/channel/channelSlice'
export const store = configureStore({
  reducer: {
    tickerslist: tickerslistReducer,
    channel: channelReducer,
    [tickersApi.reducerPath]: tickersApi.reducer,
    [channelApi.reducerPath]: channelApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tickersApi.middleware, channelApi.middleware),
})
