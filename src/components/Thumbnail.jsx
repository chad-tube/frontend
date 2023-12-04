import React from "react";

const Thumbnail = ({ url }) => {
	return (
		<div className="thumbnail text-center">
			<img src={url} alt="thumbnail" />
		</div>
	);
};

export default Thumbnail;
