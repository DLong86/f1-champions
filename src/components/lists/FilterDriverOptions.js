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
				className="m-1 px-2 py-0.5 bg-secondary hover:bg-zinc-50/80 ease-in-out duration-300 text-primary rounded"
				onClick={handleInfo}
			>
				Information
			</button>
			<button
				className="m-1 px-2 py-0.5 bg-secondary hover:bg-zinc-50/80 ease-in-out duration-300 text-primary rounded"
				onClick={handleNationality}
			>
				By Nationality
			</button>
			<button
				className="m-1 px-2 py-0.5 bg-secondary hover:bg-zinc-50/80 ease-in-out duration-300 text-primary rounded"
				onClick={handleDecade}
			>
				By Decade
			</button>
		</div>
	);
}
