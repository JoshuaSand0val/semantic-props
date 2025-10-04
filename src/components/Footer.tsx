import "./Footer.css";
import Link from "./Link";

export default function Footer() {
	return (
		<footer className="Footer container">
				<div className="wrapper">
					<span className="copyright">
						&copy; {new Date().getFullYear()}{" "}
						<Link to="https://heyjes.dev/">Joshua Elijah Sandoval.</Link>
					</span>
					<span className="info">
						<Link to="https://github.com/JoshuaSand0val/semantic-props/">Github</Link> &mdash;
						v2.0.0-beta.0 (MIT)
					</span>
				</div>
		</footer>
	);
}