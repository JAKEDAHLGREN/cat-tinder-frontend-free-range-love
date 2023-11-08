import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import CowEdit from "./pages/CowEdit"
import CowIndex from "./pages/CowIndex"
import CowNew from "./pages/CowNew"
import CowShow from "./pages/CowShow"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import "./App.css"
import mockCows from "../src/mockCows"

const App = () => {
	
	const [cows, setCows] = useState([])
	
	useEffect(() => {
		readCow(mockCows) 
	}, [])

	const readCow = (data) => {
		setCows(data)
		// fetch("http://localhost:3000/cows")
		// .then(response => response.json())
		// .then(payload => {
		// 	setCows(payload)
		// })
		// .catch(error => console.log("Cow read errors: ", error))
	}

	const createCow = (createdCow) => {
		fetch("http://localhost:3000/cows", {
			body: JSON.stringify(createdCow),
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST"
		})
		.then(response => response.json())
		.then(() => readCow())
		.catch(error => console.log("Create cow errors: ", error))
	}

	const updateCow = (selectedCow, id) => {
		fetch(`http://localhost:3000/cows/${id}`, {
			body: JSON.stringify(selectedCow),
			headers: {
				"Content-Type": "application/json"
			},
			method: "PATCH"
		})
		.then(response => response.json())
		.then(() => readCow())
		.catch(error => console.log("Update Cow errors: ", error))
	}

	const deleteCow = (id) => {
		fetch(`http://localhost:3000/cows/${id}`, {
			headers: {
				"Content-Type": "application/json"
			},
			method: "DELETE"
		})
		.then(response => response.json())
		.then(() => readCow())
		.catch(errors => console.log("Delete errors: ", errors))
	}

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cowindex" element={<CowIndex cows={cows} />} />
				<Route path="/cowshow/:id" element={<CowShow cows={cows} deleteCow={deleteCow} />} />
				<Route path="/cownew" element={<CowNew createCow={createCow} />} />
				<Route path="/cowedit/:id" element={<CowEdit cows={cows} updateCow={updateCow} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			{/* <Footer /> */}
		</>
	)
}

export default App
