import { CSSProperties } from "react";
import "./FadeIn.css";

/**
 * A vibrant title.
 * @param props.text Title text to display. 
 */

export default function FadeIn({ text }: { text: string }) {
	const words: string[] = text.split(" ").map(word => word + " ");

	return (
		<>
			{words.map((word, index) => (
				<span
					key={index}
					className="FadeIn word"
					style={{ "--word": index } as CSSProperties}>
					{word}
				</span>
			))}
		</>
	);
}