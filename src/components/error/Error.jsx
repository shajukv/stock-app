import * as Styled from './error.styles'

export const Error = ({ error }) => {
  return (
    <Styled.Error>
      <h2>
        {error.originalStatus} - {error.status} - {error.error}{' '}
      </h2>
      <h7>{error.data} </h7>
    </Styled.Error>
  )
}
