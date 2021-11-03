import styled from '@emotion/styled'

export const ForecastContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isOverlay
      ? `flex-direction: column;
             gap: 25px;
             top: 30px;
             `
      : `top: 190px;`};
`
