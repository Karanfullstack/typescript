import { FormEvent, type ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
	onSave: (data: unknown) => void;
};

export default function Form({ children, onSave, ...props }: FormProps) {
	const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData);
		onSave(data);
	};
	return (
		<form onSubmit={handelSubmit} {...props}>
			{children}
		</form>
	);
}
