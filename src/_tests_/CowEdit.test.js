import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CowEdit from "../pages/CowEdit";

describe("<CowEdit />", () => {
  it("renders the edit cow form", () => {
    render(
      <BrowserRouter>
        <CowEdit />
      </BrowserRouter> 
    );
    const nameInput = screen.getByRole('textbox', { name: /name/i }); 
    expect(nameInput).toBeInTheDocument();
     
    const ageInput = screen.getByRole('textbox', { name: "Age" });
    expect(ageInput).toBeInTheDocument();

    const enjoysInput = screen.getByRole('textbox', { name: /enjoys/i });
    expect(enjoysInput).toBeInTheDocument();
    
    const colorInput = screen.getByRole('textbox', { name: /color/i });
    expect(colorInput).toBeInTheDocument();
    
    const speciesInput = screen.getByRole('textbox', { name: /species/i });
    expect(speciesInput).toBeInTheDocument();

    const imageInput = screen.getByRole('textbox', { name: /image/i });
    expect(imageInput).toBeInTheDocument();
  });
});