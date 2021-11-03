import axios from 'axios'
import { config } from '../config/_config'
export const fetchData = (apiUrl, params) => {
  if (!apiUrl) return []
  const configParams = config?.params
  if (params) {
    params = { ...configParams, ...{ q: params.city } }
  }

  return axios.get(apiUrl, {
    params: params,
    crossDomain: true,
  })
}

export const getCurrentWeatherData = (data) => {
  const currenDatetime = Math.floor(Date.now() / 1000)
  const weatherList = data.data?.list
  const output = weatherList.reduce((prev, curr) =>
    Math.abs(curr.dt - currenDatetime) < Math.abs(prev.dt - currenDatetime)
      ? curr
      : prev
  )

  return output
}
