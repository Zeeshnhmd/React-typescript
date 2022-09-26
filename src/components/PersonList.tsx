import { PersonsProps } from "./props/Person.types";

export const PersonList = ({ names }: PersonsProps) => {
	return (
		<div>
			{names.map((name) => (
				<h1 key={name.first}>
					{name.first} {name.last}
				</h1>
			))}
		</div>
	);
};
