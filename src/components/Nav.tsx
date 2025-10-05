import "./Nav.css";

type props = {
	links: Record<string, string>
}

export default function Nav({ links }: props) {
	return (
		<div className="Nav container">
			<span tabIndex={0} role="button" className="control" aria-label="Navigation Menu">
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
				</svg>
			</span>
			<nav className="links">
			{Object.entries(links).map(([url, title]) =>
				<a href={url}>{title}</a>
			)}
			</nav>
			<div className="backdrop"></div>
		</div>
	);
}