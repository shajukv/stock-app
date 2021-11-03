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
    background-color: #4b7dd1;
    font-family: sans-serif;
    color: #d8e8fd;
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
  h3 {
    padding: 0px;
    font-size: 13px;
    margin: 0px;
  }
`
