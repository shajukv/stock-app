import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import * as Styled from './current.styles'
import { getDay, getIconUrl } from '../../helper/_helper'
export const Current = ({
  currentWeather,
  weathersList,
  handleToggleOverlay,
}) => {
  const [location, setLocation] = useContext(AppContext)
  const icon = currentWeather
    ? getIconUrl(currentWeather?.weather[0]?.icon || '')
    : ''
  const temp = currentWeather?.main?.temp

  return (
    <>
      {currentWeather && (
        <Styled.Current>
          <Styled.CurrentInfo>
            <Styled.WeatherIcon src={icon} alt="" />
            <Styled.List>
              <Styled.ListTempItem>
                <span>{Math.round(temp)}</span>
                <sup>°C</sup>
              </Styled.ListTempItem>
              <Styled.ListTempItem>
                {' '}
                Humidity: {currentWeather?.main?.humidity}%{' '}
              </Styled.ListTempItem>
              <Styled.ListTempItem>
                {' '}
                Wind: {currentWeather?.wind?.speed} km/h
              </Styled.ListTempItem>
            </Styled.List>
          </Styled.CurrentInfo>
          <Styled.CurrentOtherInfo>
            <Styled.OtherinfoCity onClick={handleToggleOverlay}>
              {`${weathersList?.city?.name} , ${weathersList?.city?.country}`}{' '}
              {location && <span>&#9776;</span>}
            </Styled.OtherinfoCity>
            <Styled.OtherinfoClouds>
              {getDay(currentWeather?.dt, weathersList?.city?.timezone)}
            </Styled.OtherinfoClouds>
            <Styled.OtherinfoClouds>
              {currentWeather.weather[0]?.description}
            </Styled.OtherinfoClouds>
          </Styled.CurrentOtherInfo>
        </Styled.Current>
      )}
    </>
  )
}
