import "./Divider.css";

/** Divider with title. */

export default function Divider({ title }: { title: string }) {
	return (
		<>
			<small className="Divider title">{title}</small>
			<hr className="Divider line" />
		</>
	);
}