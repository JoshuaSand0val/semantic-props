import "./App.css";
import Documentation from "./blocks/Documentation.mdx";
import Header from "./blocks/Header";
import Menu from "./blocks/Menu.mdx";
import Navbar from "./blocks/Navbar";

export default function App() {
	return (
		<article className="App container">
			<div className="App wrapper">
				<div className="App content">
					<main className="App main">
						<Navbar />
						<Header />
						<Menu />
					</main>
					<aside className="App aside">
						<Documentation />
					</aside>
				</div>
				<footer className="App footer">
					<span>&copy; {new Date().getFullYear()} Joshua Elijah Sandoval.</span>
				</footer>
			</div>
		</article>
	);
}