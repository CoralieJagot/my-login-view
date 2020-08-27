import React from "react";

import styled from "styled-components";

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

const Button = () => {
  return <BackgroundButton type="submit">J'y vais</BackgroundButton>;
};

export default Button;
