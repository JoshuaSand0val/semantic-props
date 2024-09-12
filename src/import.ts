// Import: All Semantic Props imported.

// Deprecated:
import deprecated from "./deprecated/import.js";

// Supported:
import "./breakpoints.scss";
import "./colors.js";
import "./containers.scss";
import "./font.scss";
import "./layer.css";
import "./pointer.js";
import "./safe.css";
import "./scroll.js";
import semantic from "./semantic.js";
import "./size.scss";
import "./timing.css";

export default (props: Parameters<typeof semantic>[0]) => {
	return (deprecated(), semantic(props));
};