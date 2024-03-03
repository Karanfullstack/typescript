import Button from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";

function App() {
	const saveData = (data: unknown) => {
		console.log(data);
	};
	return (
		<main>
			<Form onSave={saveData}>
				<Input type="text" label="name" id="name" />
				<Input type="number" label="age" id="age" />
				<p>
					<Button>Save</Button>
				</p>
			</Form>
		</main>
	);
}

export default App;
