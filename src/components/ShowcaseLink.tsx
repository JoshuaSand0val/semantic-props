import "./ShowcaseLink.css";
import Link from "./Link";

/**
 * Showcase link with title.
 * @param props.to String of page link to go to.
 * @param props.target Link target context.
 * @param props.title Title of the link.
 */

export default function ShowcaseLink(props: { [key: string]: string }) {
	const { to, target, title } = props;

	return (
		<article className="ShowcaseLink container">
			<h4 className="ShowcaseLink title">{title}</h4>
			<Link to={to} target={target}>{to} <i className="bi bi-chevron-right"></i></Link>
		</article>
	);
}