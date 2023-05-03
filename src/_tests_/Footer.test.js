import { BrowserRouter } from "react-router-dom"
import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"

describe("<Footer />", () => {
	it("renders without error", () => {
		render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>
		)
		const indexLink = screen.getByText(/Where the cows go to mingle!/i)
		expect(indexLink).toBeInTheDocument()
	})
	it("Footer has clickable links", () => {
		render(
			<BrowserRouter>
				<Footer />
			</BrowserRouter>
		)
    const indexLink = screen.getByText("Where the cows go to mingle!")
    expect(indexLink).toBeInTheDocument()
	})
})
