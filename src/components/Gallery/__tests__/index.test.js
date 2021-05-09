import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";

const portrait = {
  name: "portraits",
  description: "Portraits of people in my life",
};

afterEach(cleanup);

describe("Gallery is rendering", () => {
  it("renders", () => {
    render(<Gallery currentCategory={portrait} />);
  });
});

// To make sure the gallery matches its snapshot
it("matches snapshot", () => {
  const { asFragment } = render(<Gallery currentCategory={portrait} />);
  expect(asFragment()).toMatchSnapshot();
});

// h1 Portraits title render
it("renders", () => {
  const { getByTestId } = render(<Gallery currentCategory={portrait} />);
  expect(getByTestId("h1tag")).toHaveTextContent("Portraits");
});
