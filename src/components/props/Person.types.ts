export type Name = {
	first: string;
	last: string;
};

export type PersonProps = {
	name: Name;
};

export type PersonsProps = {
	names: Name[];
};
