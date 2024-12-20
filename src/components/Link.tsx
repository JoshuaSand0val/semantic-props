import { ReactNode } from "react";
import "./link.css";

/**
 * A link to another webpage.
 * @param props.to String of page link to go to.
 * @param props.children Content of the link.
 */

export default function Link({ to, children = to}: { to: string, children: ReactNode }) {
	return (
		<a className="link" href={to}>{children}</a>
	);
}