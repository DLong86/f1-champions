import React from "react";

export default function FilterConstructorOptions({
	handleInfo,
	handleDecade,
	handleConstructor,
}) {
	// This might only work for driver list! Might need to make a new one for constructors
	return (
		<div className="select-filter">
			<button onClick={handleInfo}>Info</button>
			<button onClick={handleDecade}>By Decade</button>
			<button onClick={handleConstructor}>By Constructor</button>
		</div>
	);
}
