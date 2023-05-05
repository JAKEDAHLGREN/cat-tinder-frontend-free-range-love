import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import CowEdit from "./pages/CowEdit"
import CowIndex from "./pages/CowIndex"
import CowNew from "./pages/CowNew"
import CowShow from "./pages/CowShow"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import mockCows from "./mockCows"
import "./App.css"

const App = () => {
	const [cows, setCows] = useState(mockCows)
	const createCow = (createdCow) => {
		console.log("Created cow: ", createdCow)
	}
	const updateCow = (cow, id) => {
		console.log("cow: ", cow)
		console.log("id: ", id)
	}

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cowindex" element={<CowIndex cows={cows} />} />
				<Route path="/cowshow/:id" element={<CowShow cows={cows} />} />
				<Route path="/cownew" element={<CowNew createCow={createCow} />} />
				<Route
					path="/cowedit/:id"
					element={<CowEdit cows={cows} updateCow={updateCow} />}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
