import "./App.css";
import { Greet } from "./components/Greet";

function App() {
	return (
		<div className="App">
			<Greet title="Zeeshan" message={10} />
		</div>
	);
}

export default App;
