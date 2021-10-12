import styled from '@emotion/styled'

export const NavTab = styled.nav`
  display: flex;
  justify-content: left;
  min-height: 10vh;
  background: rgb(25, 25, 26);
  color: white;
  margin: 20px 20px 0px 20px;
  padding: 10px 10px 0px 10px;
  border-radius: 10px 10px 0px 0px; ;
`
export const NavList = styled.ul`
  padding-left: 3px;
  width: 30%;
  display: flex;
  justify-content: left;
  align-items: center;
`
export const NavLink = styled.li`
  list-style: none;
  color: #fff;
  font-style: normal;
  font-weight: normal;
  font-family: 'Akkurat-Mono';
  font-size: 17px;
   line-height: 1;
    border: 1px solid rgb(81, 81, 94);
    padding: 10px 16px;
    
   ${props => props.left ? 'border-radius: 10px 0 0 10px': 'border-radius: 0 10px 10px 0px'};
   ${props => props.active ? 'background-color: #0e86d4;border-color: #0e86d4;': 'background-color: rgb(29, 27, 27);'};
   &:hover {
    transform: scale(1.05);
}
  
`
export const NavtabRight = styled.div`
display: flex;
justify-content: right;
align-items: center;
width: 100%;
gap: 20px;
font-style: normal;
font-weight: normal;
font-family: 'Akkurat-Mono';
font-size: 15px;
color: grey;
`

