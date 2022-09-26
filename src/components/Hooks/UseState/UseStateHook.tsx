import { useState } from "react";

export const UseStateHook = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	};
	const handleLogout = () => {
		setIsLoggedIn(false);
	};
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<h1>You are {isLoggedIn ? "logged in" : "not logged in"}</h1>
		</div>
	);
};
