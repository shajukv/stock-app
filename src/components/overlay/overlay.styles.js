import styled from '@emotion/styled'

export const Overlay = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(30, 72, 100);
  background-color: rgba(30, 72, 100, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
  h2 {
    color: #d8e8fd;
    font-style: normal;
    font-weight: bold;
    font-family: 'Akkurat-Mono';
  }

  a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  a:hover,
  a:focus {
    color: #f1f1f1;
  }
`

export const OverlayContent = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`
export const Closebtn = styled.span`
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
`
