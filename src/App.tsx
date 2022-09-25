import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/events/Button";
import { Input } from "./components/events/Input";
// import { Greet } from "./components/Greet";
// import { Heading } from "./components/Heading";
// import { Oscar } from "./components/Oscar";
// import { Status } from "./components/Status";

function App() {
	const [text, setText] = useState("");
	//function for Button component
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log("Clicked", event);
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(e.target.value);
		setText(e.target.value);
	};

	return (
		<div className="App">
			{/* <Greet title="Zeeshan" messageCount={10} isLoggedIn={true} />
			<Greet />
			<Status status="Success" />
			<Heading>
				<h1>PlaceHolder text</h1>
				<Oscar title="Oscar goes to Tayib Mugal" />
			</Heading>
			<Greet /> */}

			{/* Events */}
			<Button handleClick={handleClick} />
			<Input value={text} handleInput={handleInput} />
			<h1>{text}</h1>
		</div>
	);
}

export default App;
