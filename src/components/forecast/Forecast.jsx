import * as Styled from './forecast.styles'
import {
  getIconUrl,
  getTime,
  getDate,
  filterWeatherResults,
} from '../../helper/_helper'
import * as c from '../../constant/screen'
export const Forecast = ({ weathersList, screen, timezone }) => {
  const day = weathersList ? weathersList[0] : ''
  const forcastItem =
    screen === c.PAGE
      ? filterWeatherResults((weathersList && weathersList[1]) || [])
      : (weathersList && weathersList[1]) || []
  const cDate = forcastItem ? getDate(forcastItem[0]?.dt, timezone) : ''

  const temp = forcastItem[0]?.main?.temp

  return (
    <>
      {forcastItem && (
        <Styled.Forecast isOverlay={screen === c.PAGE ? false : true}>
          <Styled.Title>
            {day}, {cDate}
          </Styled.Title>
          <Styled.TemperatureList>
            {forcastItem.map((item, index) => (
              <span key={index} className="time">
                <Styled.TimeLabel>
                  {getTime(item?.dt, timezone)}
                </Styled.TimeLabel>
                <Styled.ForecastIcon
                  src={item?.weather[0] ? getIconUrl(item.weather[0].icon) : ''}
                  alt=""
                />
                <Styled.Temperature>
                  <Styled.TemperatureMax>
                    {Math.round(item?.main?.temp_max || 0)}
                    <sup>°</sup>
                    <span>{'/'}</span>
                  </Styled.TemperatureMax>
                  <Styled.TemperatureMin>
                    {Math.round(item?.main?.temp_min || 0)}
                    <sup>°</sup>
                    {'c'}
                  </Styled.TemperatureMin>
                </Styled.Temperature>
              </span>
            ))}
          </Styled.TemperatureList>
        </Styled.Forecast>
      )}
    </>
  )
}
