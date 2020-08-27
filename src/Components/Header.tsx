import React from "react";
import styled from "styled-components";

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

const Header = () => {
  return (
    <>
      <Title>Coucou, ça va?</Title>
    </>
  );
};

export default Header;