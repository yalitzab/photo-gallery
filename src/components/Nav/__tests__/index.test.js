import React from "react";
// Incorporate the React Testing Library
import { render, cleanup } from "@testing-library/react";
// Import the jest-dom Package
import "@testing-library/jest-dom/extend-expect";
// Import the Nav Component
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  // baseline test
  it("renders", () => {
    render(<Nav />);
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    
    expect(asFragment()).toMatchSnapshot();
    // assert value comparison

    
  });
});
