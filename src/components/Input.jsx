import React from "react";

const Input = () => {
	return (
		<div className="row gy-2 px-md-5">
			<div className="col-sm-4 col-md-11">
				<input
					type="text"
					className="form-control"
					placeholder="Enter YouTube URL"
				/>
			</div>
			<div className="col-sm-2 col-md-1">
				<button className="btn btn-primary">Download</button>
			</div>
		</div>
	);
};

export default Input;
