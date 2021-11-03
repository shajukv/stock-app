import styled from '@emotion/styled'

export const Current = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  top: 150px;
  justify-content: center;
`

export const CurrentInfo = styled.div`
  display: flex;
  width: 20%;
  flex-direction: row;
  height: auto;
`

export const CurrentOtherInfo = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  text-align: right;
  padding-right: 15px;
`

export const WeatherIcon = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  content: ${(props) => (props.src ? `url(${props.src})` : '')};
`

export const List = styled.ul`
  margin: 0px;
`
export const ListTempItem = styled.li`
  list-style: none;
  font-style: normal;
  font-weight: normal;
  font-family: 'Akkurat-Mono';
  span {
    font-size: 35px;
  }
  sup {
    font-size: 30px;
  }
`

export const OtherinfoCity = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-family: 'Akkurat-Mono';
  font-size: 25px;
  color: #d8e8fd;
  margin-top: 0px;
  cursor: pointer;
`
export const OtherinfoClouds = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-family: 'Akkurat-Mono';
  font-size: 17px;
  color: #d8e8fd;
`
