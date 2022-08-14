import Slider from "./Slider";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";

describe("Testing the Slider Component", () => {
  it("Should be present in the DOM", () => {
    render(<Slider />);

    let slider = screen.getByTestId("sliderComponent");
    expect(slider).toBeInTheDocument();
  });

  it("Should be present in the DOM", () => {
    render(<Slider />);
    let prevButton = screen.getByText("Prev");

    expect(prevButton).toBeInTheDocument();
  });

  it("Should be present in the DOM", () => {
    render(<Slider />);
    let nextButton = screen.getByText("Next");

    expect(nextButton).toBeInTheDocument();
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<Slider />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should render children", () => {
    render(<App />);

    let slider = screen.getByTestId("sliderComponent");
    expect(slider).toBeInTheDocument();
  });
});
