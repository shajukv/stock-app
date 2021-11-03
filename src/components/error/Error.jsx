import * as Styled from './error.styles'

export const Error = ({ error }) => {
  return (
    <Styled.Error>
      <h2>
        {error.response?.data?.cod} - {error.response?.data?.message}
      </h2>
    </Styled.Error>
  )
}
