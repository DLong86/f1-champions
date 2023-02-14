import { useState } from "react";
import FilterOptions from "./lists/FilterOptions";
import ByNationality from "./ByNationality";
import ByYear from "./ByYear";

export default function DisplayLists({ targetUrl }) {
	// This might only work for driver list! Might need to make a new one for constructors
	const url = targetUrl;
	const [info, setInfo] = useState(true);
	const [byNation, setByNation] = useState(false);
	const [byYear, setByYear] = useState(false);

	// fix this so all of these functions are in one!!
	const handleInfo = (e) => {
		setByNation(false);
		setByYear(false);
		setInfo(true);
	};

	const handleNationality = (e) => {
		setInfo(false);
		setByYear(false);
		setByNation(true);
	};

	const handleYear = (e) => {
		setInfo(false);
		setByNation(false);
		setByYear(true);
	};

	return (
		<div>
			<FilterOptions
				handleInfo={handleInfo}
				handleNationality={handleNationality}
				handleYear={handleYear}
			/>

			{info && (
				<div>
					<h1>This is the Info state</h1>
				</div>
			)}

			{byNation && <ByNationality />}

			{byYear && <ByYear options={url} />}
		</div>
	);
}
