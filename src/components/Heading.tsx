type HeadingProps = {
	children: string | React.ReactElement | React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
	return <div>{children}</div>;
};
