var moment = require('moment')
var _ = require('lodash')

export const getLocalTime = (timestamp) => {
  return moment.utc(timestamp).local().format('hh:mm:ss a')
}

export const sortData = (data) => {
  let sorted = Object.entries(data).sort((a, b) => a[1].MTS - b[1].MTS)
  // limit to n records
  sorted = sorted.slice(sorted.length - 20, sorted.length)
  return Object.fromEntries(sorted)
}

export const formatText = (data) => {
  if (data) {
    return data.slice(1).replace(/(?<=^(?:.{3})+)(?!$)/g, ' / ')
  }
}
export const getTradingPairCurrencyCode = (data) => {
  if (data) {
    const currencyText = data.slice(1).replace(/(?<=^(?:.{3})+)(?!$)/g, ' / ')
    const currencyCode = currencyText.split(/\W+/).filter((x) => x)
    return currencyCode
  }
  return ''
}
export const getColor = (dailyChanges) => {
  return dailyChanges > 0 ? { color: 'green' } : { color: 'red' }
}
export const getTime = (timestamp, timezone) => {
  const timezoneOffset = timezone === 0 ? timezone : `${timezone}`
  //return moment.unix(timestamp).format('hh a')
  return moment(timestamp * 1000)
    .utcOffset(timezoneOffset)
    .format('hh a')
}
