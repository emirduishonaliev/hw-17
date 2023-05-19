import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Header = () => {
  return (
    <Container>
      <div>
        <h2>iStore</h2>
      </div>
      <Nav>
        <StyledLNavLink
          to="/products"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "white",
            };
          }}
        >
          Products
        </StyledLNavLink>
        <StyledLNavLink
          to="/myCart"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "white",
            };
          }}
        >
          My Cart
        </StyledLNavLink>
        <StyledLNavLink
          to="/myOrder"
          style={({ isActive }) => {
            return {
              color: isActive ? "black" : "white",
            };
          }}
        >
          My Orders
        </StyledLNavLink>
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px 0 40px;
  background-color: blue;
  height: 95px;
  color: white;
`;

const StyledLNavLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: white;
  text-decoration: none;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 55px;
  font-size: 16px;
`;
