import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Heading } from './components/tut5/Heading';
import { Oscar } from './components/tut5/Oscar';
import { Status } from './components/tut5/Status';

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
			<Greet name="Zeeshan" isLoggedIn={true} />
			<Person name={personName} />
			<PersonList names={personList} />
			{/* Here in the "Status " component there is problem and it is that we can pass any thing as string and will not show us the error but what we do is that "Continue to Status component"  */}
			<Status status="success" />
			<Heading>Placeholder text</Heading>
			<Oscar>
				<Heading>Oscar goes to Leonardo Dicpario!</Heading>
			</Oscar>
		</div>
	);
}

export default App;
