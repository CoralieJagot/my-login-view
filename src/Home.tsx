import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Card from "./Components/Card";
import Header from "./Components/Header";

const Div = styled.div`
  width: 375px;
  height: 812px;
  background: #eef2f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  font-family: "Montserrat", sans-serif;
`;

const Home: FunctionComponent = () => {
  return (
    <>
      <Div>
        <Header />
        <Card />
      </Div>
    </>
  );
};

export default Home;