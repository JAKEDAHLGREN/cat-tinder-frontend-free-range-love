import { screen, render } from "@testing-library/react"
import Home from "../pages/Home"

describe("<Home />", () => {
    it("renders the home page for the user", () => {
        render(<Home />)
        const element = screen.getByText("Free Range Love")
        expect(element).toBeInTheDocument()
        screen.logTestingPlaygroundURL()
    })
})