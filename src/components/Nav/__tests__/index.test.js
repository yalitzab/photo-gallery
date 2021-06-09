import React from "react";
// Incorporate the React Testing Library
import { render, cleanup } from "@testing-library/react";
// Import the jest-dom Package
import "@testing-library/jest-dom/extend-expect";
// Import the Nav Component
import Nav from "..";

const categories = [
  { name: "portraits", description: "Portraits of people in my life" },
];
// Declare props
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe("Nav component", () => {
  // baseline test
  it("renders", () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// Emoji Visibility Test
describe("emoji is visible", () => {
  it("inserts emoji into the h2", () => {
    const { getByLabelText } = render(<Nav />);

    expect(getByLabelText("camera")).toHaveTextContent("📸");
  });
});

// Link Visibility Test
describe("links are visible", () => {
  it("inserts text into the links", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
    expect(getByTestId("about")).toHaveTextContent("About me");
  });
});
