import React from "react";

export default function List({ info }) {
	return (
		<ul className="list">
			<li key={info.id} className="">
				<h4>{info.year}</h4>
				<h3>{info.name || info.entrant}</h3>
				<p className="t">{info.Nationality || info.engine}</p>
				<h5>{info.team}</h5>
				{info.driver1 && (
					<div>
						<small>{info.driver1}</small>
						<br />
						<small>{info.driver2}</small>
						<br />
						<small>{info.driver3}</small>
						<br />
						<small>{info.driver4}</small>
					</div>
				)}
			</li>
		</ul>
	);
}
