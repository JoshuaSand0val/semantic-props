import FadeIn from "../components/FadeIn";
import "./header.css";

export default function Navbar() {
	return (
		<header className="Header container">
			<nav className="Header navigation">
				<a href="https://github.com/JoshuaSand0val/semantic-props" target="_blank">
					<i className="bi bi-github"></i>
					Github
				</a>
				<a href="https://heyjes.dev/" target="_blank">
					<i className="bi bi-code-slash"></i>
					Hey, Jes!
				</a>
			</nav>
			<hgroup className="Header brand">
				<p className="Header motto">CSS variables made easy.</p>
				<h1 className="Header title">
					<FadeIn text="Semantic Props" />
				</h1>
				<span className="Header info">
					<i className="bi bi-info-circle">&ensp;</i>
					v1.0.0 (MIT)</span>
			</hgroup>
		</header>
	);
}