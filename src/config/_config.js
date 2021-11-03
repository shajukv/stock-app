export const appKey = 'd0925f02d9e77a1299f178122e4db595'
export const config = {
  baseUrl: 'https://api.openweathermap.org/',
  apiUrl: () => {
    return { forecast: `${config.baseUrl}data/2.5/forecast` }
  },
  params: { appid: appKey, units: 'metric' },
  defaultCity: 'Dubai',
}

export const staticIconUrl = 'https://openweathermap.org/img/wn/'

export const weatherListConfig = {
  page: {
    numDays: 3,
  },
  overlay: {
    numDays: 5,
  },
}
