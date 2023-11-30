import React from "react";
import { FaVolumeMute } from "react-icons/fa";

const ListStream = ({ streams, title }) => {
	return (
		<>
			<h3 className="h3 text-center">{title}</h3>
			<ul className="list-group">
				{streams.map((stream, index) => {
					return (
						<li className="list-group-item" key={index}>
							<div className="container-fluid">
								<div className="row align-items-center justify-content-between text-center text-md-start gy-4 gy-md-0">
									<div className="col-sm-4 col-lg-6">
										<div className="row">
											<a>{stream.resolution}</a>
											<a>{stream.mime_type}</a>
											{!stream.abr ? (
												<a>
													<FaVolumeMute />
												</a>
											) : (
												<a>{stream.abr} kbps</a>
											)}
										</div>
									</div>
									<div className="col-sm-4 col-lg-6 text-md-end">
										<div className="badge bg-primary rounded-pill">
											{stream.file_size} KB
										</div>
										<div>
											<a href={stream.url} target="_blank">
												Download
											</a>
										</div>
									</div>
								</div>
							</div>

							{/* <div className={"d-flex" + (stream.resolution ? " gap-5": "")}>
									<a>{stream.resolution}</a>
									<a>{stream.mime_type}</a>
								</div>
								<div className="d-flex gap-4 text-center align-items-center justify-content-center">
									<span className="badge bg-primary rounded-pill">
										{stream.file_size} KB
									</span>
									<a href={stream.url} target="_blank">
										Download
									</a>
								</div> */}
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default ListStream;
