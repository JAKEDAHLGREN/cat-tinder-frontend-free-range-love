import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CowIndex from "../pages/CowIndex";
import mockCows from "../mockCows";
 
describe("<CowIndex/>", () => {
  it("renders cow cards", () => {
    render(
      <BrowserRouter>
        <CowIndex cows={mockCows} />
      </BrowserRouter>
    );
    mockCows.forEach((cow) => {
      const cowName = screen.getByText(cow.name);
      expect(cowName).toBeInTheDocument();
    });
  });
});
