import { CSSProperties } from "react";
import "../styles/fade-in.css";

/**
 * Sequentially fades-in text content word by word.
 * @param props.text Text to fade-in. 
 */

export default function FadeInText({ text }: { text: string }) {
	const words: string[] = text.split(" ").map(word => word + " ");

	return (
		<>
			{words.map((word, index) => (
				<span
					key={index}
					className="fade-in"
					style={{ "--delay": index } as CSSProperties}>
					{word}
				</span>
			))}
		</>
	);
}