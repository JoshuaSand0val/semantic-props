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
							<ShowcaseLink to="#blur" title="Blur filters" />
							<ShowcaseLink to="#border" title="Border properties" />
							<ShowcaseLink to="#brightness" title="Brightness filters" />
							<ShowcaseLink to="#color" title="Colors" />
							<ShowcaseLink to="#container" title="Container Sizes" />
							<ShowcaseLink to="#contrast" title="Contrast filters" />
							<ShowcaseLink to="#ease" title="Easing functions" />
							<ShowcaseLink to="#font" title="Font properties" />
							<ShowcaseLink to="#letter" title="Letter-spacing properties" />
							<ShowcaseLink to="#line" title="Line-height properties" />
							<ShowcaseLink to="#opacity" title="Opacity properties" />
							<ShowcaseLink to="#ratio" title="Aspect-Ratios" />
							<ShowcaseLink to="#safe" title="Display safe-areas" />
							<ShowcaseLink to="#saturation" title="Saturation filters" />
							<ShowcaseLink to="#scale" title="Scale properties" />
							<ShowcaseLink to="#shadow" title="Drop-shadow filters" />
							<ShowcaseLink to="#size" title="Sizing properties" />
							<ShowcaseLink to="#time" title="Time properties" />
							<ShowcaseLink to="#word" title="Word-spacing properties" />
							<ShowcaseLink to="#z" title="Z-index properties" />
						</nav>
					</main>
					<aside className="App aside">
						<Divider title="Usage &amp; Description" />
					</aside>
				</div>
				<footer className="App footer">
					<span>&copy; {new Date().getFullYear()} Joshua Elijah Sandoval.</span>
				</footer>
			</div>
		</article>
	);
}