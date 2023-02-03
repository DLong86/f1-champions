// import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import DriverList from "./pages/DriverList";
import ConstructorList from "./pages/ConstructorList";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main">
				{/* <DriverList /> */}
				<ConstructorList />
			</div>
		</div>
	);
}

export default App;
