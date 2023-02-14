import React from "react";

export default function FilterOptions({
	handleInfo,
	handleNationality,
	handleYear,
}) {
	// This might only work for driver list! Might need to make a new one for constructors
	return (
		<div className="select-filter">
			<button onClick={handleInfo}>Info</button>
			<button onClick={handleNationality}>By Nationality</button>
			<button onClick={handleYear}>By Year</button>
			<button onClick={() => console.log("Willy")}>By Driver</button>
		</div>
	);
}
