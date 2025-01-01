import { ReactNode } from "react";
import "./Main.css";

export default function Main({ children }: { children: ReactNode }) {
	return (
		<main className="Main container">
			<div className="Main wrapper">
				{ children }
			</div>
		</main>
	);
}