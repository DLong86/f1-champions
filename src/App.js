// import { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DriverList from "./pages/DriverList";
import ConstructorList from "./pages/ConstructorList";
import Stats from "./pages/Stats";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="main">
					<Routes>
						<Route path="/" element={<Stats />} />
						<Route path="/drivers" element={<DriverList />} />
						<Route path="/constructors" element={<ConstructorList />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
