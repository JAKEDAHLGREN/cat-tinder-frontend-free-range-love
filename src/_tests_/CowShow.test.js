import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import CowShow from "../pages/CowShow";
import mockCows from "../mockCows";
 
const renderShow = () => {
    render(
        <MemoryRouter initialEntries={['/cowshow/1']}> 
          <Routes>
            <Route path='/cowshow/:id' element={<CowShow cows={mockCows}/>}/>
          </Routes>
          </MemoryRouter>
    )
}

describe("<CowShow/>", () => {
  it("renders cow card with enjoys", () => {
    renderShow()
    expect(screen.getByText(`${mockCows[0].name} likes ${mockCows[0].enjoys}`, {exact: false})).toBeInTheDocument()
     
    });
  });