<script>
	import "../app.css";

    import Body from "$lib/components/Body.svelte";
    import Footer from "$lib/blocks/Footer.svelte";
    import Nav from "$lib/blocks/Nav.svelte";

	let { children } = $props();
</script>

<div class="container">
	<Nav />
	<main class="content">
		<Body>
			{@render children()}
		</Body>
	</main>
	<Footer />
</div>

<style>
	:global(:root) {
		display: block;
		font-family: var(--body-family);
		font-weight: var(--regular-weight);
		line-height: var(--normal-line);
		word-spacing: var(--normal-word);
		letter-spacing: var(--normal-letter);
		scroll-behavior: smooth;
		background-color: var(--background-color);
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