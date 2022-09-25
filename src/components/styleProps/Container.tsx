type ContainerProps = {
	children: string | React.ReactNode;
	styles: React.CSSProperties;
};

export const Container = ({ children, styles }: ContainerProps) => {
	return <div style={styles}>{children}</div>;
};
