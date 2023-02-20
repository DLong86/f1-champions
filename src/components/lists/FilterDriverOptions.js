import React from "react";

export default function FilterDriverOptions({
	handleInfo,
	handleNationality,
	handleDecade,
}) {
	// This might only work for driver list! Might need to make a new one for constructors
	return (
		<div className=" flex items-stretch justify-evenly">
			<button
				className="m-1 px-2 bg-yellow-300 hover:bg-yellow-400 ease-in-out duration-300"
				onClick={handleInfo}
			>
				Information
			</button>
			<button
				className="m-1 px-2  bg-yellow-300 hover:bg-yellow-400 ease-in-out duration-300"
				onClick={handleNationality}
			>
				By Nationality
			</button>
			<button
				className="m-1 px-2 py-0.5 bg-yellow-300 hover:bg-yellow-400 ease-in-out duration-300"
				onClick={handleDecade}
			>
				By Decade
			</button>
			{/* <button onClick={() => console.log("Willy")}>By Year</button> */}
			{/* For the onstructors */}
			{/* <button onClick={handleConstructor}>By Constructor</button> */}
		</div>
	);
}
