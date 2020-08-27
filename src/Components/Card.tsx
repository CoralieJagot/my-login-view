import React from "react";
import styled from "styled-components";

import Form from "./Form";

const Container = styled.div`
  padding: 24px;
  /* margin: -12px 0; */
  box-sizing: border-box;
  border: 1px solid #ffffff;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 3px 0 rgba(0, 21, 41, 0.1), 0 2px 4px 0 rgba(0, 21, 41, 0.2);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
`;

const Card = () => {
  return (
    <>
      <Container>
        <Form />
      </Container>
    </>
  );
};

export default Card;
