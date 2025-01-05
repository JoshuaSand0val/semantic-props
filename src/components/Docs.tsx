import "./Docs.css";
import { ReactNode } from "react";
import Divider from "./Divider";

interface props {
	title: string,
	desc: string,
	id: string,
	props: { [key: string]: string | string[] },
	children: ReactNode
}

/**
 * Block of documentation for Semantic Props module.
 * @param props.title Title of the Semantic Props module.
 * @param props.desc Description of the Semantic Props module.
 * @param props.id HTML ID of the documentation.
 * @param props.props Usage, Property object of Semantic Props.
 */

export default function Docs({ title, desc, id, props, children }: props) {
	return (
		<article id={id}>
			<Divider title={title} />
			<p className="Docs desc">{desc}</p>
			<div className="Docs container">
				<table className="Docs table">
					<thead>
						<tr>
							<th scope="col">Usage</th>
							<th scope="col">Property</th>
						</tr>
					</thead>
					<tbody>
						{Object.entries(props).map(([usage, properties]) => [properties].flat().map(property => (
							<tr key={usage}>
								<th scope="row" className="Docs usage">
									<code>{usage}:</code>
								</th>
								<td className="Docs property">
									<code>var(<span className="Docs prop">{property}</span>);</code>
								</td>
							</tr>
						)))}
					</tbody>
				</table>
			</div>
			{children}
		</article>
	);
}