import React from "react";

export default function FilterDriverOptions({
	handleInfo,
	handleNationality,
	handleDecade,
}) {
	return (
		<div className="filter-options">
			<button className="" onClick={handleInfo}>
				Information
			</button>
			<button className="" onClick={handleNationality}>
				By Nationality
			</button>
			<button className="" onClick={handleDecade}>
				By Decade
			</button>
		</div>
	);
}
