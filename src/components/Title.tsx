import { CSSProperties } from "react";
import "./title.css";

/**
 * A vibrant primary title.
 * @param props.text Title text to display. 
 */

export default function Title({ text }: { text: string }) {
	const chars: string[] = text.split("");

	return (
		<h1 className="title">
			{chars.map((char, index) => (
				<span key={index} style={{ "--char": index } as CSSProperties}>
					{char}
				</span>
			))}
		</h1>
	);
}