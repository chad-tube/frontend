import React, { useRef } from "react";

const Input = ({ onDownloadClick }) => {
	const urlRef = useRef(null);

	return (
		<div className="row gy-2 px-md-5">
			<div className="col-sm-4 col-md-11">
				<input
					type="text"
					className="form-control"
					placeholder="Enter YouTube URL"
					ref={urlRef}
				/>
			</div>
			<div className="col-sm-2 col-md-1">
				<button
					className="btn btn-primary"
					onClick={() => {
						onDownloadClick(urlRef.current.value);
					}}
				>
					Download
				</button>
			</div>
		</div>
	);
};

export default Input;
