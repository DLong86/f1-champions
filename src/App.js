// import { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Drivers from "./pages/Drivers";
import Constructors from "./pages/Constructors";
import Stats from "./pages/Stats";
import Home from "./pages/Home";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="app-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/stats" element={<Stats />} />
						<Route path="/drivers" element={<Drivers />} />
						<Route path="/constructors" element={<Constructors />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
