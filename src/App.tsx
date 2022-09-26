import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/eventsProps/Button";
import { Input } from "./components/eventsProps/Input";
import { Container } from "./components/styleProps/Container";
import { Greet } from "./components/Greet";
// import { Heading } from "./components/Heading";
// import { Oscar } from "./components/Oscar";
// import { Status } from "./components/Status";
import { UseStateHook } from "./components/Hooks/UseState/UseStateHook";
import { UseStateHookTS } from "./components/Hooks/UseState/UseStateHookTS";

function App() {
	const [text, setText] = useState("");
	//function for Button component
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setText("");
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		// console.log(e.target.value);
		setText(e.target.value);
	};

	return (
		<div className="App">
			<Container
				styles={{
					marginTop: "50px",
					padding: "100px",
					maxWidth: "900px",
					border: "1px solid #000",
					margin: " 0 auto",
				}}
			>
				{/* <Greet /> */}
				{/* <Greet title="Zeeshan" messageCount={10} isLoggedIn={true} />
			<Status status="Success" />
			<Heading>
      <h1>PlaceHolder text</h1>
      <Oscar title="Oscar goes to Tayib Mugal" />
			</Heading>
    <Greet /> */}

				{/* Events */}

				{/* <Button handleClick={handleClick} />
				<Input value={text} handleInput={handleInput} />
				<h1>{text}</h1> */}

				{/* Hooks */}
				<UseStateHook />

				{/* <UseStateHook /> */}
				<UseStateHookTS />
			</Container>
		</div>
	);
}

export default App;
