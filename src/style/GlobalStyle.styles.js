import { css } from '@emotion/react'

export const GlobalStyle = css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: #101010;
    font-family: sans-serif;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: blue;
    font-size: 18px;
  }

  a.active,
  a.active:link,
  a.active:visited {
    pointer-events: none;
    cursor: default;
  }
`
