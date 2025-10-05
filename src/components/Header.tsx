import "./Header.css";
import Nav from "./Nav";

export default function Header() {
	return (
		<header className="Header">
			<Nav links={{
				"#intro": "Introduction to Semantic Props",
				"#builtusing": "Built using Semantic Props",
				"#colors": "Color Palette",
				"#filters": "Filter Effects",
				"#fonts": "Font Sizes and Styles",
				"#aspectratios": "Aspect Ratios",
				"#safeareas": "Display Safe-Areas",
				"#sizes": "Containers and Spacing Sizes",
				"#timing": "Animation Timing and Easing"
			}} />
			<h6 className="description">Expertly crafted CSS variables for creating consistent components in any design.</h6>
			<h4 className="title"><strong>Semantic Props</strong> <em>v2.0.0-beta.0 (MIT)</em></h4>
		</header>
	);
}