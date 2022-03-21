import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
	const personName = {
		first: 'Zeeshan',
		last: 'Ahmad',
	};

	const personList = [
		{
			first: 'Zeeshan',
			last: 'Ahmad',
		},
		{
			first: 'Faizan',
			last: 'Ahmad',
		},
		{
			first: 'Jhon',
			last: 'Doe',
		},
	];
	return (
		<div className="App">
			<Greet name="Zeeshan" messageCount={30} isLoggedIn={true} />
			<Person name={personName} />
			<PersonList names={personList} />
		</div>
	);
}

export default App;
