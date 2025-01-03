import "./App.css";
import Header from "./blocks/Header";
import Navbar from "./blocks/Navbar";
import CodeBlock from "./components/CodeBlock";

export default function App() {
	return (
		<article className="App container">
			<div className="App wrapper">
				<div className="App content">
					<main className="App main">
						<Navbar />
						<Header />

						<CodeBlock lang="css">
						{`@import "https://unpkg.com/semantic-props";`}
						</CodeBlock>
					</main>
					<aside className="App aside">
						Usage &amp; Description
					</aside>
				</div>
				<footer className="App footer">
					<span>&copy; {new Date().getFullYear()} Joshua Elijah Sandoval.</span>
				</footer>
			</div>
		</article>
	);
}