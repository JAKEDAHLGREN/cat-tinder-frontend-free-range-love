import { screen, render } from "@testing-library/react"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
    it("renders the NotFound page for the user", () => {
        render(<NotFound />)
        screen.debug()
        const element = screen.getByText("Out to pasture")
        expect(element).toBeInTheDocument()
    })
})
