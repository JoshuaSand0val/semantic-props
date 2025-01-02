import "./Header.css";
import FadeInText from "../components/FadeInText";
import "../styles/scale-in.css";

/** Website header block. */

export default function Header() {
	return (
		<header className="Header container">
			<span className="Header info scale-in">
				<i className="bi bi-info-circle"></i> v1.0.0 (MIT)
			</span>
			<h2 className="Header motto">
				<FadeInText text="CSS variables made easy." />
			</h2>
			<h1 className="Header title scale-in">
				Semantic Props
			</h1>
		</header>
	);
}