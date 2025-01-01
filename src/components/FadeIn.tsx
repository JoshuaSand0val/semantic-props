import { CSSProperties } from "react";
import css from "./fadein.module.css";

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
					className={css.word}
					style={{ "--word": index } as CSSProperties}>
					{word}
				</span>
			))}
		</>
	);
}