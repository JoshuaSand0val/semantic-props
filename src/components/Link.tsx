import { ReactNode } from "react";
import "../styles/link.css";

/**
 * A link to another webpage.
 * @param props.to String of page link to go to.
 * @param props.children Content of the link.
 */

export default function Link(props: { to: string, children: ReactNode }) {
	const { to, children = to } = props;

	return (
		<a className="link" href={to} {...props}>{children}</a>
	);
}