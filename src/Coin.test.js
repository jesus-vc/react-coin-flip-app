import { render, screen, fireEvent } from "@testing-library/react";

import Coin from "./Coin";

//smoke test
it("renders without crashing", () => {
  render(<Coin />);
});

// snapshot test
it("matches snapshot", () => {
  const { asFragment } = render(<Coin />);
  expect(asFragment()).toMatchSnapshot();
});

it("does not display coin image when page loads", () => {
  render(<Coin />);

  expect(
    screen.getByText("Out of 0 flips, there have been 0 heads and 0 tails.")
  ).toBeInTheDocument();

  const coinImage = screen.queryByTestId("coin-image");

  expect(coinImage).not.toBeInTheDocument();
});

it("displays coin image when button is clicked", () => {
  render(<Coin />);

  const button = screen.getByText("Flip!");

  fireEvent.click(button);
  const coinImage = screen.queryByTestId("coin-image");

  expect(coinImage).toBeInTheDocument();
});

it("displays heads image when button is clicked", () => {
  // Mock Math.random to return a specific value (e.g., 0.2 for heads)
  jest.spyOn(Math, "random").mockReturnValue(0.2);

  render(<Coin />);

  const button = screen.getByText("Flip!");

  fireEvent.click(button);

  const headsImage = screen.getByAltText("heads");

  expect(headsImage).toBeInTheDocument();

  // Clean up the mock after the test
  jest.spyOn(Math, "random").mockRestore();
});

it("displays tails image when button is clicked", () => {
  // Mock Math.random to return a specific value (e.g., 0.2 for heads)
  jest.spyOn(Math, "random").mockReturnValue(0.9);

  render(<Coin />);

  const button = screen.getByText("Flip!");

  fireEvent.click(button);

  const headsImage = screen.getByAltText("tails");

  expect(headsImage).toBeInTheDocument();

  // Clean up the mock after the test
  jest.spyOn(Math, "random").mockRestore();
});
