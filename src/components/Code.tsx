import "./Code.css";

/**
 * Syntax highlighted code block.
 * @param props.text Code to display. 
 * @param props.lang Code language.
 */

export default function Code({ text, lang }: { text: string, lang: string }) {
	return (
		<pre className="Code container">
			<code className={`language-${lang}`}>{text}</code>
		</pre>
	);
}