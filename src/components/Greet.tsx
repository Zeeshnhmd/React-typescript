// interface GreetProps {
// 	title: string;
// 	message: number;
// }

/**
 * * we can also write the above thing using type
 * * its good to use "type" while building web application or pages and "interface" while building libraries
 */

type GreetProps = {
	title: string;
	message: number;
};

export const Greet = ({ title, message }: GreetProps) => {
	return (
		<h1>
			Welcome {title} you have {message} unread messages
		</h1>
	);
};
