import React from "react";
// Incorporate the React Testing Library
import { render, cleanup } from "@testing-library/react";
// Import the jest-dom Package
import "@testing-library/jest-dom/extend-expect";
// Import the About Component
import About from "..";

afterEach(cleanup);

describe("About component", () => {
  //renders About test

  // First Test
  it("renders", () => {
    render(<About />);
  });

  // Second Test
  it('matches snapshot DOM node structure', () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })
});
