import React from "react";

export default function FilterOptions({
	handleInfo,
	handleNationality,
	handleDecade,
	handleConstructor,
}) {
	// This might only work for driver list! Might need to make a new one for constructors
	return (
		<div className="select-filter">
			<button onClick={handleInfo}>Info</button>
			<button onClick={handleNationality}>By Nationality</button>
			<button onClick={handleDecade}>By Decade</button>
			{/* <button onClick={() => console.log("Willy")}>By Year</button> */}
			{/* For the onstructors */}
			<button onClick={handleConstructor}>By Constructor</button>
		</div>
	);
}
