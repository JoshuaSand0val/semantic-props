import "./Navbar.css";
import Link from "../components/Link";
import "../styles/scale-in.css";

/** Website navbar block. */

export default function Navbar() {
	return (
		<nav className="Navbar container scale-in">
			<Link to="https://github.com/JoshuaSand0val/semantic-props" target="_blank">
				<i className="bi bi-github"></i> Github
			</Link>
			<Link to="https://heyjes.dev/" target="_blank">
				<i className="bi bi-code-slash"></i> Hey, Jes!
			</Link>
			<Link to="#menu" target="_self">
				<i className="bi bi-list" aria-label="Menu"></i>
			</Link>
		</nav>
	);
}