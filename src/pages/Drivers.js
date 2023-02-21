// import { useState } from "react";
import useFetch from "../hooks/useFetch";
import DisplayDriverLists from "../components/DisplayDriverLists";

export default function Drivers() {
	const url = "http://localhost:8080/drivers";
	const { data } = useFetch(url);

	return (
		<div className="max-w-full h-screen">
			<h1 className="text-3xl text-cyan-500">World Driver Champions List</h1>
			<DisplayDriverLists targetUrl={url} />
		</div>
	);
}
