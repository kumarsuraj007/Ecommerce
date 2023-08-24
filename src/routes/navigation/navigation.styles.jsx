import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
   height: 100%;
   width: 70px;
   padding: 25px;
`

export const NavLinks = styled.div`
    display: flex;
    padding: 25px 15px;
`

export const NavLink = styled(Link)`
padding: 25px 15px;
      cursor: pointer;
`
  
