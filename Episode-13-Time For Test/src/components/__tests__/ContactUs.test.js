import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

// It is for grouping test cases
describe("ContactUs Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Should load ContactUs component", () => {
    // Will get rendered on the jsdom
    render(<ContactUs />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside  ContactUs component", () => {
    // Will get rendered on the jsdom
    render(<ContactUs />);

    // Here "button" is the React Element. This is the virtual DOM React Element. This is not the actual Html element.
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside  ContactUs component", () => {
    // Will get rendered on the jsdom
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the ContactUs component", () => {
    render(<ContactUs />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
