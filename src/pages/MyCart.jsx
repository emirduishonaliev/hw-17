import React from "react";
import { styled } from "styled-components";
import { Button } from "../components/UI/Button";

export const MyCart = () => {
  return (
    <>
      <Container>
        <p>My Cart page</p>
      </Container>
      <BtnContainer>
        <Button>Go Back</Button>
      </BtnContainer>
    </>
  );
};

const Container = styled.div`
  width: 90%;
  padding: 40px;
  text-align: start;
  background-color: #fff;
  margin: 10px 35px 0 35px;
  font-size: 19px;
  font-weight: bold;
`;

const BtnContainer = styled.div`
  text-align: start;
  margin-left: 35px;
  margin-top: 20px;
`;
