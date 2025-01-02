import "../styles/code-block.css";

/**
 * Simple code block.
 * @param props.text Code to display. 
 * @param props.lang Code language.
 */

export default function Code({ text, lang }: { text: string, lang: string }) {
	return (
		<pre>
			<code className={`language-${lang}`}>{text}</code>
		</pre>
	);
}