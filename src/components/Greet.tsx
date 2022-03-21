type GreetProps = {
	name: string;

	// like suppose we don't want to use messageCount props. so, in that case we need to indicate that the messageCount is optional, and we can do that just by adding (?) after the props
	// Optional Props
	messageCount?: number;

	isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
	// we are adding this because we want see (0) instead of seeing (undefined) in the page
	// Its saying that if (messagecount is not defined than show (0) in the page)
	const { messageCount = 0 } = props;
	return (
		<div>
			<h2>
				{props.isLoggedIn
					? ` hi ${props.name}, you have ${messageCount} unread messages`
					: 'welcome Guest'}
			</h2>
		</div>
	);
};
