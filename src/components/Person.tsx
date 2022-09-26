import { Name } from "./props/Person.types";

export const Person = ({ first, last }: Name) => {
	return (
		<h1>
			{first} {last}
		</h1>
	);
};
