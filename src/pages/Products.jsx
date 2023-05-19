import React from "react";
import { styled } from "styled-components";
import { Button } from "../components/UI/Button";
import { Link } from "react-router-dom";

const products = [
  {
    title: "Iphone 14 pro",
    url: "https://softech.kg/image/cache/41298c8e9b905465003380f38105bb38.jpg",
    price: "1320",
    id: "1",
  },
  {
    title: "Iphone 13 pro",
    url: "https://softech.kg/image/cache/8af0e86156f176545b7e126cf9aef658.png",
    price: "1120",
    id: "2",
  },
  {
    title: "Iphone 12 pro",
    url: "https://softech.kg/image/cache/5a79fb7776731fd46a2b9e7bd0ebe700.png",
    price: "650",
    id: "3",
  },
];

export const Products = () => {
  return (
    <div>
      <Container>
        {products.map((el) => (
          <StyledLink to={`${el.id}/details`}>
            <ProductContainer>
              <div>
                <Image src={el.url} alt="iphone" />
              </div>
              <div>
                <Title>{el.title}</Title>
                <h4>${el.price}</h4>
              </div>
              <StyledButton>More</StyledButton>
            </ProductContainer>
          </StyledLink>
        ))}
      </Container>
      <BtnContainer>
        <Button>Go Back</Button>
      </BtnContainer>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 430px;
`;

const Title = styled.h4`
  &:hover {
    text-decoration: underline;
    text-decoration-color: blue;
  }
`;

const StyledButton = styled.button`
  border: none;
  width: 75px;
  height: 30px;
  padding: 5px 15px;
  border-radius: 10px;
  background-color: blue;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: blue;
    border: 2px solid blue;
  }
`;

const ProductContainer = styled.div`
  width: 430px;
  height: 480px;
  border: none;
  margin-top: 30px;
  margin-left: 30px;
  background-color: white;
  border-radius: 60px;
  padding-top: 60px;
`;

const BtnContainer = styled.div`
  text-align: start;
  margin-left: 110px;
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
