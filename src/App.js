import React, { useState } from "react"
import { Routes, Route } from "reacte-router-dom"
import "./App.css"
import Header from "./components/Header"
import CowEdit from "./pages/CowEdit"
import CowIndex from "./pages/CowIndex"
import CowNew from "./pages/CowNew"
import CowShow from "./pages/CowShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cowindex" element={<CowIndex />} />
				<Route path="/cowshow" element={<CowShow />} />
				<Route path="/cownew" element={<CowNew />} />
				<Route path="/cowedit" element={<CowEdit />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
