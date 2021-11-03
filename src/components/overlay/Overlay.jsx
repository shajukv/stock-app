import { Link } from 'react-router-dom'
import * as Styled from './overlay.styles'
import { ForecastContainer } from '../forecastContainer/ForecastContainer'
import * as c from '../../constant/screen'
export const Overlay = ({
  overlayStyle,
  handleToggleOverlay,
  weathersList,
}) => {
  return (
    <Styled.Overlay width={overlayStyle}>
      <Styled.OverlayContent>
        <h2> Weather Forecast Details </h2>
        <Link to="" onClick={handleToggleOverlay}>
          <Styled.Closebtn>×</Styled.Closebtn>
        </Link>
        <ForecastContainer weathersList={weathersList} screen={c.OVERLAY} />
      </Styled.OverlayContent>
    </Styled.Overlay>
  )
}
