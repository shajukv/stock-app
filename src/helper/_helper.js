import * as c from '../constant/screen'
import { staticIconUrl } from '../config/_config'

var moment = require('moment')
var _ = require('lodash')

export const getDay = (timestamp, timezone) => {
  const timezoneOffset = timezone === 0 ? timezone : `${timezone}`
  return moment(timestamp * 1000)
    .utcOffset(timezoneOffset)
    .format('dddd, MMM DD YYYY hh a')
  //return moment(timestamp * 1000).tz("Europe/London").format('dddd, MMM DD YYYY hh a')
}

export const getDate = (timestamp, timezone) => {
  const timezoneOffset = timezone === 0 ? timezone : `${timezone}`
  //return moment.unix(timestamp).format(' MMM DD YYYY')
  return moment(timestamp * 1000)
    .utcOffset(timezoneOffset)
    .format(' MMM DD YYYY')
}
export const getIconUrl = (icon) => {
  if (!icon) {
    return ''
  }
  return `${staticIconUrl}${icon}.png`
}

export const getGroupedWeatherResults = (weathersList) => {
  const sortedWeathersList = _.sortBy(weathersList, (item) => item.dt)
  return _.groupBy(sortedWeathersList, (item) =>
    moment.unix(item.dt).format('ddd')
  )
}
export const getGroupedWeatherResultsHours = (weathersList) => {
  const sortedWeathersList = _.sortBy(weathersList, (item) => item.dt)
  const grouedWeathersList = _.groupBy(sortedWeathersList, (item) =>
    moment.unix(item.dt).format('hh a')
  )
  return grouedWeathersList
}
export const getTime = (timestamp, timezone) => {
  const timezoneOffset = timezone === 0 ? timezone : `${timezone}`
  //return moment.unix(timestamp).format('hh a')
  return moment(timestamp * 1000)
    .utcOffset(timezoneOffset)
    .format('hh a')
}
export const filterWeatherResults = (weathersList) => {
  return weathersList.filter((element, index) => index % 2 == 0)
}
