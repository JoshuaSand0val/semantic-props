import { ReactNode } from "react";
import "./Link.css";

/**
 * A link to another webpage.
 * @param props.to String of page link to go to.
 * @param props.target Link browsing context.
 * @param props.children Content of the link.
 */

export default function Link({ to, target = "_self", children = to}: { to: string, target: string, children: ReactNode }) {
	return (
		<a className="Link" href={to} target={target}>{children}</a>
	);
}