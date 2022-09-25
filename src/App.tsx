import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Status } from "./components/Status";

function App() {
	return (
		<div className="App">
			<Greet title="Zeeshan" messageCount={10} isLoggedIn={true} />
			<Greet />
			<Status status="Success" />
			<Heading>
				<h1>PlaceHolder text</h1>
				<Oscar title="Oscar goes to Tayib Mugal" />
			</Heading>
			<Greet />
		</div>
	);
}

export default App;
