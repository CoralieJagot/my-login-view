import React from "react";

import { render, fireEvent } from "@testing-library/react";
import AboutMe from "../AboutMe";

import "@testing-library/jest-dom";

describe("AboutMe", () => {
  it("should render correctly", () => {
    const { getByText, queryByText } = render(<AboutMe />);

    expect(queryByText("Hello world")).not.toBeInTheDocument();

    fireEvent.click(getByText("Go to home"));

    expect(getByText("Hello world")).toBeVisible();
  });
});
