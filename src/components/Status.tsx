/**
 * * we can also specify props as different string "OR { | }"
 */

type StatusProps = {
	status: "Loading" | "Success" | "Error";
};

export const Status = ({ status }: StatusProps) => {
	return <h1>Status: {status}</h1>;
};
