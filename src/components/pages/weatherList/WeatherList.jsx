import { Current } from '../../current/Current'
import { ForecastContainer } from '../../forecastContainer/ForecastContainer'
import { useQuery } from 'react-query'
import { config } from '../../../config/_config'
import { fetchData, getCurrentWeatherData } from '../../../api/_dataService'
import { useState, useEffect, useContext, useCallback } from 'react'
import { AppContext } from '../../../context/AppContext'
import * as CommonStyled from '../../../style/common.styles'
import loaderImage from '../../../images/load.svg'
import { Overlay } from '../../overlay/Overlay'
import * as c from '../../../constant/screen'
import { Error } from '../../error/Error'
const apiUrl = config?.apiUrl()?.forecast

const WeatherList = () => {
  const [location, setLocation] = useContext(AppContext)
  const [isOpenOverlay, toggleOverlay] = useState(true)
  const [overlayStyle, setOverlayStyle] = useState('0')
  const params = {
    city: location ? location : config?.defaultCity,
  }
  const { isLoading, error, data } = useQuery(`${params.city}`, () =>
    fetchData(apiUrl, params)
  )
  const [currentWeather, setCurrentWeather] = useState(null)
  const [weathersList, setWeathersList] = useState(null)

  const handleToggleOverlay = useCallback(
    (e) => {
      if (!location) {
        return
      }
      toggleOverlay(!isOpenOverlay)
      isOpenOverlay ? setOverlayStyle('90%') : setOverlayStyle('0')
    },
    [isOpenOverlay, toggleOverlay, location]
  )

  useEffect(() => {
    if (data) {
      setCurrentWeather(getCurrentWeatherData(data))
      setWeathersList(data?.data)
    }
  }, [data])
  if (isLoading) {
    return (
      <CommonStyled.Loader>
        <img src={loaderImage} width="30" height="30" alt="" />
      </CommonStyled.Loader>
    )
  }
  if (error) return <Error error={error} />
  return (
    <>
      <Current
        currentWeather={currentWeather}
        weathersList={weathersList}
        handleToggleOverlay={handleToggleOverlay}
      />
      {location && (
        <>
          <ForecastContainer weathersList={weathersList} screen={c.PAGE} />
          <Overlay
            overlayStyle={overlayStyle}
            handleToggleOverlay={handleToggleOverlay}
            weathersList={weathersList}
          />
        </>
      )}
    </>
  )
}

export default WeatherList
