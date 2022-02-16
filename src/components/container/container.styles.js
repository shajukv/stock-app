import styled from '@emotion/styled'

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  width: 100%;
  height: 100vh;
  background-color: #112331;
  row-gap: 10px;
  @media (min-width: 481px) {
    grid-template-columns: minmax(400px, 25%) 1fr;
    grid-template-rows: minmax(45px, 10%) 1fr;
  }
`
