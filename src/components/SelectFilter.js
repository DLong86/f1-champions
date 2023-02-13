import React from "react";

export default function SelectFilter() {
	const [info, setInfo] = useState(true);
	const [byNation, setByNation] = useState(false);

	const handleInfo = (e) => {
		setByNation(false);
		setInfo(true);
	};

	const handleNationality = (e) => {
		setInfo(false);
		setByNation(true);
	};
	return (
		<div className="select-filter">
			<ul className="filter-list">
				<li onClick={handleInfo}>Info</li>
				<li onClick={handleNationality}>By Nationality</li>
			</ul>
		</div>
	);
}
