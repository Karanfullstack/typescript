import { type ReactNode } from "react";

type CardProps = {
	title: string;
	actions: ReactNode;
	children: ReactNode;
};

export default function Card({ title, actions, children }: CardProps) {
	return (
		<section>
			<h2>{title}</h2>
			{actions}
			{children}
		</section>
	);
}
