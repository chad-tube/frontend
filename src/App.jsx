import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import DownloadArea from "./components/DownloadArea";
import ListStream from "./components/ListStream";
import Loading from "./components/Loading";
import Thumbnail from "./components/Thumbnail";

let requestOptions = {
	method: "GET",
	redirect: "follow",
	headers: {
		"Content-Type": "application/json",
	},
};

let baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
	const [result, setResult] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const handleDownloadClick = (url) => {
		let raw = JSON.stringify({ url: url });
		setResult({});
		setIsLoading(true);
		fetch(`${baseUrl}/api/v1/download/`, {
			...requestOptions,
			method: "POST",
			body: raw,
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setResult(result);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="container px-5">
			<Nav />
			<DownloadArea onDownloadClick={handleDownloadClick} />
			{isLoading && <Loading />}
			{result.thumbnail && (
				<>
					<hr />
					<Thumbnail thumbnail={result.thumbnail} />
				</>
			)}
			{result.streams && (
				<>
					<hr />
					<ListStream streams={result.streams} title={result.title} />
				</>
			)}
		</div>
	);
}

export default App;
