type StatusProps = {
	// we can say here that the string should be like this
	status: 'loading' | 'success' | 'error';
	// so this way we can tacal that problem
};

export const Status = (props: StatusProps) => {
	let message;
	if (props.status === 'loading') {
		message = 'Loading...';
	} else if (props.status === 'success') {
		message = 'Data fetched Successfully!';
	} else if (props.status === 'error') {
		message = 'Error Fetching Data';
	}
	return (
		<div>
			<h2>Status - {message}</h2>
		</div>
	);
};
