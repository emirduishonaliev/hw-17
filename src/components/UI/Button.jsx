import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const Button = ({ children }) => {
  const navigate = useNavigate();

  return <StyledButton onClick={() => navigate(-1)}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #24614fe7;
  width: 100px;
  border: none;
  border-radius: 25px;
  color: white;
  padding: 10px;
`;
