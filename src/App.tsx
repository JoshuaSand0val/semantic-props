import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import Header from "./sections/Header";
import Main from "./sections/Main";
import Code from "./components/Code";

export default function App() {
	return (
		<>		
			<Header />
			<Main>
				<Code lang="css" text={`@import "https://unpkg.com/semantic-props";`} />
			</Main>
		</>
	);
}