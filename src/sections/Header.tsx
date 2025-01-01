import FadeIn from "../components/FadeIn";
import css from "./header.module.css";

export default function Navbar() {
	return (
		<header className={css.container}>
			<div className={css.wrapper}>
				<nav className={css.navigation}>
					<a href="https://github.com/JoshuaSand0val/semantic-props" target="_blank">
						<i className="bi bi-github"></i>
						Github
					</a>
					<a href="https://heyjes.dev/" target="_blank">
						<i className="bi bi-person-circle"></i>
						Hey, Jes!
					</a>
				</nav>
				<hgroup className={css.brand}>
					<p className={css.motto}>CSS variables made easy.</p>
					<h1 className={css.title}>
						<FadeIn text="Semantic Props" />
					</h1>
					<span className={css.info}>
						<i className="bi bi-info-circle">&ensp;</i>
						v1.0.0 (MIT)</span>
				</hgroup>
			</div>
		</header>
	);
}