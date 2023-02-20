// import { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Drivers from "./pages/Drivers";
import Constructors from "./pages/Constructors";
import Stats from "./pages/Stats";
import "./App.css";

function App() {
	return (
		<div className="bg-slate-300/50">
			<BrowserRouter>
				<Navbar />
				<div className="">
					<Routes>
						<Route path="/" element={<Stats />} />
						<Route path="/drivers" element={<Drivers />} />
						<Route path="/constructors" element={<Constructors />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
