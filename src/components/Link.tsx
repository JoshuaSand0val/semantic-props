import { ReactNode } from "react";
import "./Link.css";

/**
 * Represents a link to another webpage.
 * @param props.to String of page link to go to.
 * @param props.children Content of the link.
 */

export default function Link(props: { to: string, children: ReactNode }) {
	const { to, children = to } = props;

	return (
		<a className="Link" href={to} {...props}>{children}</a>
	);
}