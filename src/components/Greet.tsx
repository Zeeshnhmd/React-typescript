// interface GreetProps {
// 	title: string;
// 	message: number;
// }

import { Person } from "./Person";
import { PersonList } from "./PersonList";

/**
 * * we can also write the above thing using type
 * * its good to use "type" while building web application or pages and "interface" while building libraries
 * * setting (?) after props name declares that this props is not mandatory
 * * we can aslo set a default value to props by giving it values as below
 */

type GreetProps = {
	title?: string;
	messageCount?: number;
	isLoggedIn?: boolean;
};

export const Greet = ({
	title = "John",
	messageCount = 0,
	isLoggedIn = true,
}: GreetProps) => {
	// for Person component
	const name = {
		first: "Zeeshan",
		last: "Ahmad",
	};

	// for person list component
	const personList = [
		{ first: "Zeeshan", last: "Ahmad" },
		{ first: "Jhon", last: "Doe" },
		{ first: "Jhan", last: "Doe" },
	];

	return (
		<>
			<h1>
				{isLoggedIn
					? `Welcome ${title} you have ${messageCount} unread messages`
					: "Welcome guest"}
			</h1>
			<Person first={name.first} last={name.last} />
			<PersonList names={personList} />
		</>
	);
};
