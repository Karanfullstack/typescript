import { useRef } from "react";
import Input from "./components/Input";

function App() {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<main>
			<Input ref={ref} type="text" id="name" label="Enter Your Name" />
		</main>
	);
}

export default App;
