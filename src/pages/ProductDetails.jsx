import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Button } from "../components/UI/Button";
import { styled } from "styled-components";

const products = [
  {
    title: "Iphone 14 pro",
    url: "https://softech.kg/image/cache/41298c8e9b905465003380f38105bb38.jpg",
    price: "1320",
    id: "1",
    info: "The iPhone 14 Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.12 inches diagonally (actual viewable area is less).",
  },
  {
    title: "Iphone 13 pro",
    url: "https://softech.kg/image/cache/8af0e86156f176545b7e126cf9aef658.png",
    price: "1120",
    id: "2",
    info: "iOS — максимально надёжная мобильная операционная система с невероятными возможностями персонализации, мощными функциями и передовыми средствами обеспечения конфиденциальности.",
  },
  {
    title: "Iphone 12 pro",
    url: "https://softech.kg/image/cache/5a79fb7776731fd46a2b9e7bd0ebe700.png",
    price: "650",
    id: "3",
    info: "Функции универсального доступа помогают людям с особыми потребностями максимально эффективно пользоваться новым iPhone. Благодаря встроенной поддержке специальных функций люди с нарушениями зрения, слуха, моторики и обучаемости почувствуют все преимущества самого персонального устройства в мире. Подробные сведения Универсальный доступ .",
  },
];

export const ProductDetails = () => {
  const params = useParams();
  const findedProduct = products.find((el) => el.id === params.productId);

  return (
    <>
      <Container>
        <div>
          <img src={findedProduct.url} alt="iphone" />
        </div>
        <InfoContainer>
          <h2>{findedProduct.title}</h2>
          <h4>Price:${findedProduct.price}</h4>
          <p>{findedProduct.info}</p>
        </InfoContainer>
        <Outlet />
      </Container>
      <ButtonContainer>
        <Button>Go Back</Button>
      </ButtonContainer>
    </>
  );
};

const Container = styled.div`
  display: flex;
  background-color: white;
  width: 90%;
  margin: 0 20px 0 60px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  text-align: start;
  margin-left: 60px;
  margin-top: 20px;
`;
