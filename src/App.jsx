import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import DownloadArea from "./components/DownloadArea";
import ListStream from "./components/ListStream";

let requestOptions = {
	method: "GET",
	redirect: "follow",
	headers: {
		"Content-Type": "application/json",
	},
};

let baseUrl = "http://localhost:8000";

function App() {
	const [result, setResult] = useState({});

	const handleDownloadClick = (url) => {
		let raw = JSON.stringify({ url: url });
		fetch(`${baseUrl}/api/v1/download/`, {
			...requestOptions,
			method: "POST",
			body: raw,
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setResult(result);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="container px-5">
			<Nav />
			<DownloadArea onDownloadClick={handleDownloadClick} />
			<hr />
			{result.streams && <ListStream streams={result.streams} title={result.title} />}
		</div>
	);
}

export default App;
