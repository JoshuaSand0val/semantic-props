<script>
	import "../app.css";

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
	:global(:root) {
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