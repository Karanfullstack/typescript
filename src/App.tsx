import { useRef } from "react";
import Button from "./components/Button";
import Form, { FormHandle } from "./components/Form";
import Input from "./components/Input";

export default function App() {
	const formRef = useRef<FormHandle>(null);
	const onSaveHandeler = (data: unknown) => {
		const value = data as {name: string}
		console.log(value);
		formRef.current?.clear();
	};
	return (
		<main>
			<Form onSave={onSaveHandeler} ref={formRef}>
				<Input name="name" label="Name" id="name" />
				<Button>Submit</Button>
			</Form>
		</main>
	);
}
