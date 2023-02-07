import React from "react";

export default function Dropdown({ selectYear }) {
	return (
		<div>
			<select onChange={selectYear}>
				<option value="select">select decade</option>
				<option value="2020">2020s</option>
				<option value="2010">2010s</option>
				<option value="2000">2000s</option>
				<option value="1990">1990s</option>
				<option value="1980">1980s</option>
				<option value="1970">1970s</option>
				<option value="1960">1960s</option>
				<option value="1950">1950s</option>
			</select>
		</div>
	);
}
