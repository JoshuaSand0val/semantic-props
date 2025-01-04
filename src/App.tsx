import "./App.css";
import Header from "./blocks/Header";
import Navbar from "./blocks/Navbar";
import Divider from "./components/Divider";
import ShowcaseLink from "./components/ShowcaseLink";

export default function App() {
	return (
		<article className="App container">
			<div className="App wrapper">
				<div className="App content">
					<main className="App main">
						<Navbar />
						<Header />
						<nav className="App navigation" id="menu">
							<Divider title="Built with Semantic Props" />
							<ShowcaseLink to="https://heyjes.dev/" title="Hey, Jes!" target="_blank" />

							<Divider title="Semantic Props" />
							<ShowcaseLink to="#blur" title="Blur Filters" />
							<ShowcaseLink to="#border" title="Border Properties" />
							<ShowcaseLink to="#brightness" title="Brightness Filters" />
							<ShowcaseLink to="#color" title="Color Properties" />
							<ShowcaseLink to="#container" title="Container Sizes" />
							<ShowcaseLink to="#contrast" title="Contrast Filters" />
							<ShowcaseLink to="#ease" title="Easing Functions" />
							<ShowcaseLink to="#font" title="Font Properties" />
							<ShowcaseLink to="#letter" title="Letter-spacing Properties" />
							<ShowcaseLink to="#line" title="Line-height Properties" />
							<ShowcaseLink to="#opacity" title="Opacity Properties" />
							<ShowcaseLink to="#ratio" title="Aspect-Ratios" />
							<ShowcaseLink to="#safe" title="Display Safe-Areas" />
							<ShowcaseLink to="#saturation" title="Saturation Filters" />
							<ShowcaseLink to="#scale" title="Scale Properties" />
							<ShowcaseLink to="#shadow" title="Drop-Shadow Filters" />
							<ShowcaseLink to="#size" title="Sizing Properties" />
							<ShowcaseLink to="#time" title="Time Properties" />
							<ShowcaseLink to="#word" title="Word-Spacing Properties" />
							<ShowcaseLink to="#z" title="Z-Index Properties" />
						</nav>
					</main>
					<aside className="App aside">
						<Divider title="Name, Description &amp; Usage" />
					</aside>
				</div>
				<footer className="App footer">
					<span>&copy; {new Date().getFullYear()} Joshua Elijah Sandoval.</span>
				</footer>
			</div>
		</article>
	);
}