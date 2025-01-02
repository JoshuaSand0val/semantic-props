import "./CodeBlock.css";

/**
 * Represents a block of code.
 * @param props.children Code to display. 
 * @param props.lang Code language.
 */

export default function CodeBlock({ children, lang }: { children: string, lang: string }) {
	return (
		<pre>
			<code className={`CodeBlock language-${lang}`}>{children}</code>
		</pre>
	);
}