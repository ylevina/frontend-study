import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Nav>
      <LinkStyled exact to="/">Home</LinkStyled>
      <LinkStyled to="/favorites">Favorites</LinkStyled>
      <LinkStyled to="/cart">Cart</LinkStyled>
    </Nav>
  );
}

const Nav = styled.nav`  
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;  
`

const LinkStyled = styled(Link)`
  text-decoration: none;
  list-style-type: none;  
  font-size: 20px; 
  font-weight: bold; 
  color: white;
`