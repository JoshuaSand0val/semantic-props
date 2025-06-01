(function () {
	// Return in any incompatible environment (such as Node.js):
	if (typeof window === "undefined") return;

	/** Adds progressive enhancement `scripted` class to document. */
	function scripted(): void {
		document.documentElement.classList.add("scripted");
	}

	// Initialize `scripted` class:
	document.addEventListener("DOMContentLoaded", scripted);
	scripted();
})();