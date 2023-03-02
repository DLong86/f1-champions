import { useState } from "react";
import FilterDriverOptions from "./lists/FilterDriverOptions";
import ByNationality from "./ByNationality";
import ByDecade from "./ByDecade";

export default function DisplayDriverLists({ targetUrl }) {
	const url = targetUrl;
	const [info, setInfo] = useState(true);
	const [byNation, setByNation] = useState(false);
	const [byYear, setByYear] = useState(false);
	const [byConstructor, setByConstructor] = useState(false);

	// fix this so all of these functions are in one!!
	const handleInfo = (e) => {
		setByNation(false);
		setByYear(false);
		setByConstructor(false);
		setInfo(true);
	};

	const handleNationality = (e) => {
		setInfo(false);
		setByYear(false);
		setByConstructor(false);
		setByNation(true);
	};

	const handleDecade = (e) => {
		setInfo(false);
		setByNation(false);
		setByConstructor(false);
		setByYear(true);
	};

	const handleConstructor = (e) => {
		setInfo(false);
		setByNation(false);
		setByYear(false);
		setByConstructor(true);
	};

	return (
		<div className="display-lists">
			<FilterDriverOptions
				handleInfo={handleInfo}
				handleNationality={handleNationality}
				handleDecade={handleDecade}
				handleConstructor={handleConstructor}
			/>

			{info && (
				<div>
					<h1>This is the Info state</h1>
				</div>
			)}

			{byNation && <ByNationality />}

			{byYear && <ByDecade options={url} />}
		</div>
	);
}
