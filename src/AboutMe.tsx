import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { useHistory } from "react-router";

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
const Title = styled.h1`
  height: 35px;
  width: 327px;
  color: #232c7a;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 0.47px;
  line-height: 35px;
  text-align: center;
  margin: 94px 24px 24px 24px;
`;
const BackgroundButton = styled.button`
  height: 50px;
  width: 303px;
  box-sizing: border-box;
  border: 1px solid #0152c7;
  border-radius: 37px;
  background: #0152c7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  color: white;
  transition: border 0.2s ease-in-out;
  &:focus {
    outline: none;
    border: 2px solid lightskyblue;
  }
`;
const AboutMe: FunctionComponent = () => {
  const { push } = useHistory();

  return (
    <>
      <Div>
        <Title>Mon espace perso...</Title>
        <br />
        <BackgroundButton onClick={() => push("/")}>
          Go to home
        </BackgroundButton>
      </Div>
    </>
  );
};

export default AboutMe;