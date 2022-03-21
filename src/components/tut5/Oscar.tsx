// passing a Component as "Props" we need to use "React.ReactNode" (this is provided by React typescript)

type OscarProps = {
	children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
	return <div>{props.children}</div>;
};
