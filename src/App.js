// import { useState, useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DriverList from "./pages/DriverList";
import ConstructorList from "./pages/ConstructorList";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="main">
					<Routes>
						<Route path="/" element={<DriverList />} />
						<Route path="/constructors" element={<ConstructorList />} />
						{/* <DriverList /> */}
						{/* <ConstructorList /> */}
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
