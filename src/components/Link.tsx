import "./Link.css";

type Props = {
	children: React.ReactNode,
	to: string,
	target?: string
};

export default function Link({ children, to, target }: Props) {
	return (
		<a className="Link" href={to} target={target ?? "_self"}>
			{children}
		</a>
	);
}