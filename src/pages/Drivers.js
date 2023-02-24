// import { useState } from "react";
import useFetch from "../hooks/useFetch";
import DisplayDriverLists from "../components/DisplayDriverLists";

export default function Drivers() {
	const url = "http://localhost:8080/drivers";
	const { data } = useFetch(url);

	return (
		<div className="drivers-container">
			<h1 className="">World Driver Champions List</h1>
			<DisplayDriverLists targetUrl={url} />
		</div>
	);
}
