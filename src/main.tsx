import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.mdx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);