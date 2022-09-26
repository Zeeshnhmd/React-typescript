import React, { useState } from "react";

type AuthUser = {
	name: string;
	email: string;
};

export const UseStateHookTS = () => {
	const [users, setUsers] = useState<AuthUser | null>(null);
	const [loggedIn, setLoggedIn] = useState(false);

	const handleLogin = () => {
		setLoggedIn(true);
		setUsers({
			name: "Zeeshan",
			email: "zeeshnhmd.1@gmail.com",
		});
	};

	const handleLogout = () => {
		setLoggedIn(false);
	};
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			{!loggedIn ? (
				<h1>User is not loggedin</h1>
			) : (
				<>
					<h1>User Name: {users?.name}</h1>
					<h1>User Email: {users?.email}</h1>
				</>
			)}
		</div>
	);
};
