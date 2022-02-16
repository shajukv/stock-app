import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WS_API_URL } from '../../config/_config'
import {
  tranformTickerChannelMsg,
  tranformTradeChannelMsg,
} from '../_dataUtils'

export const channelApi = createApi({
  reducerPath: 'channelApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Message'],
  endpoints: (build) => ({
    getChannelMessages: build.query({
      queryFn: ({ ...message }) => ({ data: [] }),
      async onCacheEntryAdded(
        arg,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const ws = new WebSocket(WS_API_URL)

        try {
          await cacheDataLoaded
          const listener = (event) => {
            const data = JSON.parse(event.data)
            updateCachedData((draft) => {
              if (
                arg.event === 'subscribe' &&
                arg.channel === 'ticker' &&
                arg.symbol
              ) {
                if (data && Array.isArray(data) && Array.isArray(data[1])) {
                  const tranformedData = tranformTickerChannelMsg(data)
                  draft.push(tranformedData)
                }
              }
              if (
                arg.event === 'subscribe' &&
                arg.channel === 'trades' &&
                arg.symbol
              ) {
                if (data && Array.isArray(data)) {
                  if (Array.isArray(data[2])) {
                    const tranformedData = tranformTradeChannelMsg(
                      data[2],
                      true
                    )
                    draft.push(tranformedData)
                  }
                  if (Array.isArray(data[1])) {
                    const tranformedData = tranformTradeChannelMsg(data[1])
                    draft.push(tranformedData)
                  }
                }
              }
            })
          }
          const onOpenWs = () => {
            console.log('Opening a connection...')
            if (arg.symbol) {
              ws.send(JSON.stringify(arg))
            }
          }
          ws.addEventListener('message', listener)
          ws.addEventListener('open', onOpenWs)
        } catch {
          console.log(
            'Exception - Someting went wrong on Websocket communication'
          )
        }
        await cacheEntryRemoved
        ws.close()
      },
    }),
  }),
})

export const { useGetChannelMessagesQuery } = channelApi
