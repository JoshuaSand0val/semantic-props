import { ReactNode } from "react";
import "./Info.css";

/**
 * Displays informative documentation content.
 * @param props.children Info content to display. 
 */

export default function Info({ children }: { children: ReactNode }) {
	return (
		<strong className="Info">{children}</strong>
	);
}