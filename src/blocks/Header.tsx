import "./Header.css";
import CodeBlock from "../components/CodeBlock";
import FadeInText from "../components/FadeInText";
import Info from "../components/Info";
import "../styles/scale-in.css";

/** Website header block. */

export default function Header() {
	return (
		<header className="Header container">
			<span className="Header info">
				<i className="bi bi-info-circle"></i> v1.0.0 (MIT)
			</span>
			<h4 className="Header motto">
				<FadeInText text="Stylesheets made easy." />
			</h4>
			<h3 className="Header title scale-in">
				Semantic Props
			</h3>

			<CodeBlock lang="css">
@import "https://unpkg.com/semantic-props";
			</CodeBlock>

			<Info>
				Semantic Props are scoped to the <code>semantic</code> class.
				This allows for CSS custom property reevaluation.
			</Info>
		</header>
	);
}