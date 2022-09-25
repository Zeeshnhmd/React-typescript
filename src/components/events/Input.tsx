import React from "react";

type InputProps = {
	value?: string;
	handleInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ handleInput, value }: InputProps) => {
	return <input type="text" value={value} onChange={handleInput} />;
};
