import "./Navbar.css";
import "../styles/scale-in.css";

/** Website navbar block. */

export default function Navbar() {
	return (
		<nav className="Navbar container scale-in">
			<a href="https://github.com/JoshuaSand0val/semantic-props">
				<i className="bi bi-github"></i> Github
			</a>
			<a href="https://heyjes.dev/">
				<i className="bi bi-code-slash"></i> Hey, Jes!
			</a>
		</nav>
	);
}