import { CSSProperties } from "react";
import css from "./Title.module.css";

/**
 * A vibrant primary title.
 * @param props.text Title text to display. 
 */

export default function Title({ text }: { text: string }) {
	const chars: string[] = text.split("");

	return (
		<h1 className={css.container}>
			{chars.map((char, index) => (
				<span
					key={index}
					className={css.char}
					style={{ "--char": index } as CSSProperties}>
					{char}
				</span>
			))}
		</h1>
	);
}