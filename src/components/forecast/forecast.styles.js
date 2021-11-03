import styled from '@emotion/styled'

export const Forecast = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isOverlay
      ? `width: 600px;
        border: solid 1px #d8e8fd;
        border-radius: 25px 25px 25px 25px;
        `
      : `width: 300px; border-top: solid 1px #d8e8fd;
           border-bottom: solid 1px #d8e8fd;
           background: #4b7dd1;
         & + & {
            border-left: solid 2px #d8e8fd;
          }
          :first-of-type {
            border-left: solid 1px #d8e8fd;
            border-radius: 15px 0 0 15px;
          }
        
          :last-child {
            border-right: solid 1px #d8e8fd;
            border-radius: 0 15px 15px 0;
          }`};
`
export const TemperatureList = styled.div`
  display: flex;
  span + span {
    border-left: solid 2px rgba(20, 20, 20, 0.1);
  }
`
export const ForecastIcon = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  content: ${(props) => (props.src ? `url(${props.src})` : '')};
`

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-family: 'Akkurat-Mono';
  font-size: 17px;
  color: #d8e8fd;
  padding-bottom: 10px;
  margin-bottom: 0px;
  border-bottom: 1px solid #d8e8fd;
`
export const TimeLabel = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-family: 'Akkurat-Mono';
  font-size: 12px;
  color: #d8e8fd;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  margin-bottom: 0px;
`
export const Temperature = styled.div`
  font-style: normal;
  font-weight: bold;
  font-family: 'Akkurat-Mono';
  font-size: 15px;
  color: #d8e8fd;
  padding-bottom: 10px;
  margin-bottom: 0px;
`
export const TemperatureMax = styled.label`
  color: #ec6e4c;
  padding-right: 5px;
  padding-left: 5px;
  span {
    color: #d8e8fd;
  }
`
export const TemperatureMin = styled.label`
  padding-right: 5px;
`
