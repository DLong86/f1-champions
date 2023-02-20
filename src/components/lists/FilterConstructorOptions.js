import React from "react";

export default function FilterConstructorOptions({
	handleInfo,
	handleDecade,
	handleConstructor,
}) {
	// This might only work for driver list! Might need to make a new one for constructors
	return (
		<div className="select-filter">
			<button
				onClick={handleInfo}
				className="m-1 px-2 py-0.5 bg-yellow-300 hover:bg-yellow-400 ease-in-out duration-300"
			>
				Information
			</button>
			<button
				onClick={handleDecade}
				className="m-1 px-2 py-0.5 bg-yellow-300 hover:bg-yellow-400 ease-in-out duration-300"
			>
				By Decade
			</button>
			<button
				onClick={handleConstructor}
				className="m-1 px-2 py-0.5 bg-yellow-300 hover:bg-yellow-400 ease-in-out duration-300"
			>
				By Constructor
			</button>
		</div>
	);
}
