import {
	ComponentPropsWithoutRef,
	FormEvent,
	forwardRef,
	useImperativeHandle,
	useRef,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
	onSave: (data: unknown) => void;
};
export type FormHandle = {
	clear: () => void;
};
const Form = forwardRef<FormHandle, FormProps>(function (
	{ children, onSave, ...props },
	ref
) {
	const formRef = useRef<HTMLFormElement>(null);
	useImperativeHandle(ref, () => {
		return {
			
			clear: () => {
				console.log("clear")
				formRef.current?.reset()
			},
		};
	});
	const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		onSave(data);
	};

	return (
		<form {...props} ref={formRef} onSubmit={handelSubmit}>
			{children}
		</form>
	);
});

export default Form;
