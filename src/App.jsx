import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import Input from "./components/Input";
import Nav from "./components/Nav";
import DownloadArea from "./components/DownloadArea";

function App() {
	return (
		<div className="px-5">
			<Nav />
			<DownloadArea />
		</div>
	);
}

export default App;
