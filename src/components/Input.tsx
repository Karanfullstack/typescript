import { ComponentPropsWithoutRef, forwardRef } from "react";
// forwardref
type InputProps = {
	label: string;
	id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ label, id, ...props },
	ref
) {
	return (
		<p>
			<label htmlFor={id}>{label}</label>
			<input ref={ref} name={id} {...props} id={id} />
		</p>
	);
});

export default Input;
