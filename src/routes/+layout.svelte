<script>
	import "semantic-props/js";

    import Footer from '$lib/blocks/Footer.svelte';
    import Nav from '$lib/blocks/Nav.svelte';

	let { children } = $props();
</script>

<div class="container">
	<Nav />
	<main class="content">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	:global {
		@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
		@import "sanitize.css";
		@import "semantic-props/css";
	}

	:global(.semantic) {
		--display-family: "Ubuntu", sans-serif;
		--body-family: "Open Sans", sans-serif;
		--mono-family: "IBM Plex Mono", monospace;
	}

	:global(:root) {
		scroll-behavior: smooth;
		background-color: var(--primary-color);
		color: var(--high-contrast-color);
		overflow-x: hidden;
		overflow-y: auto;
	}

	:global(:root, body),
	.container {
		min-block-size: 100vh;
		min-block-size: 100dvb;
	}

	.container {
		display: flex;
		flex-flow: column nowrap;
		justify-content: start;
		align-items: stretch;
	}

	.content {
		display: block;
		flex: 1 0 auto;
	}
</style>