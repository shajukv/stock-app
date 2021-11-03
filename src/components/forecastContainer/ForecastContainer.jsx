import { Forecast } from '../forecast/Forecast'
import * as Styled from './forecastContainer.styles'
import { getGroupedWeatherResults } from '../../helper/_helper'
import { weatherListConfig } from '../../config/_config'
import * as c from '../../constant/screen'

export const ForecastContainer = ({ weathersList, screen }) => {
  if (!weathersList) {
    return ''
  }
  const numdays =
    screen === c.PAGE
      ? weatherListConfig?.page?.numDays
      : weatherListConfig?.overlay?.numDays
  const groupedResults = Object.entries(
    getGroupedWeatherResults(weathersList?.list)
  )

  const finalWeatherList =
    screen === c.PAGE ? groupedResults.slice(0, numdays) : groupedResults

  return (
    <Styled.ForecastContainer isOverlay={screen === c.PAGE ? false : true}>
      {finalWeatherList.map((item, index) => (
        <Forecast
          weathersList={item}
          key={index}
          screen={screen}
          timezone={weathersList?.city?.timezone || 0}
        />
      ))}
    </Styled.ForecastContainer>
  )
}
