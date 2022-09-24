// interface GreetProps {
// 	title: string;
// 	message: number;
// }

import { Person } from "./Person";
import { PersonList } from "./PersonList";

/**
 * * we can also write the above thing using type
 * * its good to use "type" while building web application or pages and "interface" while building libraries
 */

type GreetProps = {
	title: string;
	messageCount: number;
	isLoggedIn: boolean;
};

export const Greet = ({ title, messageCount, isLoggedIn }: GreetProps) => {
	// for Person component
	const name = {
		first: "Zeeshan",
		last: "Ahmad",
	};

	const personList = [
		{ id: 1, first: "Zeeshan", last: "Ahmad" },
		{ id: 2, first: "Jhon", last: "Doe" },
		{ id: 3, first: "Jhan", last: "Doeeeee" },
	];

	return (
		<>
			<h1>
				{isLoggedIn
					? `Welcome ${title} you have ${messageCount} unread messages`
					: "Welcome guest"}
			</h1>
			<Person name={name} />
			<PersonList names={personList} />
		</>
	);
};
