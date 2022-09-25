/**
 * * passing props to button component
 * * passing events to button component {React.MouseEvent} we can also be more specific by adding {<HTMLButtonElement>} this indicates that it is a "button click"
 */

import React from "react";

type ButtonProps = {
	handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = ({ handleClick }: ButtonProps) => {
	return <button onClick={(event) => handleClick(event, 1)}>Button</button>;
};
