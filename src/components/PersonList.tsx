type PersonsProps = {
	names: {
		first: string;
		last: string;
		id: number;
	}[];
};

export const PersonList = (props: PersonsProps) => {
	return (
		<div>
			{props.names.map((name) => (
				<h1 key={name.id}>
					{name.first} {""}
					{name.last}
				</h1>
			))}
		</div>
	);
};
