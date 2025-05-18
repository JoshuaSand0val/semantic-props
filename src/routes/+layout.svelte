<script>
    import Footer from '$lib/blocks/Footer.svelte';

	let { children } = $props();
</script>

<div class="container">
	<main class="content semantic tablet">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	:global {
		@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
		@import "sanitize.css";
		@import "semantic-props";
	}

	:global(.semantic) {
		--display-family: "Ubuntu", sans-serif;
		--body-family: "Open Sans", sans-serif;
		--mono-family: "IBM Plex Mono", monospace;

		--primary-accent-color: var(--primary-yellow);
		--secondary-accent-color: var(--secondary-yellow);
		--third-accent-color: var(--third-yellow);
		--fourth-accent-color: var(--fourth-yellow);
		--fifth-accent-color: var(--fifth-yellow);
	}

	:global(:root) {
		scroll-behavior: smooth;
		background-color: var(--primary-body-color);
		color: var(--primary-text-color);
		font-family: var(--body-family);
		line-height: var(--normal-line);
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
		inline-size: min(var(--larger-container), 100%);
		flex: 1 0 auto;
		transition: padding var(--faster-time) var(--ease-in);
		padding: var(--margin-size);
		padding-right: max(var(--safe-right), var(--margin-size));
		padding-left: max(var(--safe-left), var(--margin-size));
		margin-inline: auto;
	}
</style>