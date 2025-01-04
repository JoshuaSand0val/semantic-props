import "./App.css";
import Header from "./blocks/Header";
import Menu from "./blocks/Menu.mdx";
import Navbar from "./blocks/Navbar";
import Divider from "./components/Divider";

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