import React, { useState, FormEvent, ChangeEvent } from "react";

import styled from "styled-components";
import Button from "./Button";

import { useHistory } from "react-router";

const Label = styled.label`
  height: 21px;
  width: 303px;
  color: #4f82c5;
  font-size: 14px;
  letter-spacing: 0.23px;
  line-height: 21px;
  padding-bottom: 0.2rem;
  display: flex;
  align-items: center;
`;
const BackgroundInput = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 303px;
  border: 1px solid #cdd9e5;
  border-radius: 15px;
  padding: 0.5rem;
  font-size: 16px;
  letter-spacing: 0.27px;
  line-height: 24px;
  transition: border 0.2s ease-in-out;
  &::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }
  &:focus {
    outline: none;
    border: 1px solid rebeccapurple;
  }
`;
const TestRobot = styled.span`
  height: 24px;
  width: 133px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  letter-spacing: 0.27px;
  line-height: 24px;
  margin-left: 1.5rem;
`;
const Checkbox = styled.input`
  box-sizing: border-box;
  height: 24px;
  width: 24px;
  border: 1px solid #cdd9e5;
  border-radius: 6px;
  margin: 0;
`;
const Item = styled.div`
  margin: 12px 0;
`;

const Form = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCheckbox, setUserCheckbox] = useState(false);
  const { push } = useHistory();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, password: userPassword })
      });

      if (!response.ok) {
        throw new Error("Whoops");
      }
      const data = await response.json();
      console.log(data);
      push("/protected");
    } catch (e) {
      console.error(e);
    }
    /** On doit faire un appel POST (avec fetch) vers https://reqres.in/api/login avec
     * {
     * "email": "eve.holt@reqres.in",
     * "password": "cityslicka"
     * }
     * -> window.alert(data)
     */
    console.log(userEmail, userPassword, userCheckbox);
  }

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setUserEmail(event.target.value);
  }
  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setUserPassword(event.target.value);
  }
  function handleChangeCheckbox(event: ChangeEvent<HTMLInputElement>) {
    setUserCheckbox(event.target.checked);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Item>
          <Label htmlFor="email">Email</Label>
          <BackgroundInput
            id="email"
            placeholder="jon@snow.com"
            type="email"
            onChange={handleChangeEmail}
            value={userEmail}
            required
          />
        </Item>

        <Item>
          <Label htmlFor="password">Mot de passe</Label>
          <BackgroundInput
            id="password"
            placeholder="m0td3p4sse"
            type="password"
            onChange={handleChangePassword}
            value={userPassword}
            required
          />
        </Item>

        <Item>
          <Label>
            <Checkbox type="checkbox" onChange={handleChangeCheckbox} />
            <TestRobot>Je suis un robot</TestRobot>
          </Label>
        </Item>

        <Button />
      </form>
    </>
  );
};

export default Form;

// async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//   event.preventDefault();

//   try {
//     const response = await fetch("https://reqres.in/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: userEmail, password: userPassword })
//     });

//     if (!response.ok) {
//       throw new Error("Whoops");
//     }
//     const data = await response.json();
//     console.log(data);
//     push("/protected");
//   } catch (e) {
//     console.error(e);
//   }
