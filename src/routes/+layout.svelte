<script>
	import "../app.css";

    import Content from "$lib/components/Content.svelte";
    import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();
</script>

<div class="container">
	<main class="content">
		<Content>
			{@render children()}
		</Content>
	</main>
	<Footer />
</div>

<style>
	:global(:root) {
		display: block;
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