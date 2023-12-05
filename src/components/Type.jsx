import React from "react";

const Type = ({ typeChoices, chosenType, onTypeChange }) => {
	return (
		<div className="dropdown">
			<button
				className="btn btn-danger dropdown-toggle"
				type="button"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{ chosenType.label }
			</button>
			<ul className="dropdown-menu">
                {typeChoices.map((choice, index) => {
                    return (
                        <li key={index} onClick={() => onTypeChange(choice)}>
                            <a className="dropdown-item" href="#" data-value={choice.value}>
                                {choice.label}
                            </a>
                        </li>
                    )
                })}

			</ul>
		</div>
	);
};

export default Type;
