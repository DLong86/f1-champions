import React from "react";
import DisplayLists from "../components/DisplayLists";

export default function Stats() {
	// This URL needs to be passed down from the DRIVERS & CONSTRUCTORS pages
	const targetUrl = "http://localhost:8080/drivers";
	return (
		<div>
			<h1>Stats Page</h1>
			<p>this is the stats page...</p>
			<DisplayLists targetUrl={targetUrl} />
		</div>
	);
}
