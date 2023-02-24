import React from "react";

export default function FilterConstructorOptions({
	handleInfo,
	handleDecade,
	handleConstructor,
}) {
	// This might only work for driver list! Might need to make a new one for constructors
	return (
		<div className="filter-options">
			<button onClick={handleInfo} className="">
				Information
			</button>
			<button onClick={handleDecade} className="">
				By Decade
			</button>
			<button onClick={handleConstructor} className="">
				By Constructor
			</button>
		</div>
	);
}
