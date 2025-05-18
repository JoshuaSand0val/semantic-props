<script>
	let { children } = $props();
</script>

<div class="container">
	<main class="content">
		{@render children()}
	</main>
</div>

<style>
	:global {
		@import "sanitize.css";
		@import "semantic-props";
	}

	:global(:root) {
		background-color: var(--primary-body-color);
		color: var(--primary-text-color);
		line-height: var(--line-normal);
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
		inline-size: min(var(--largest-container), 100%);
		flex: 1 0 auto;
		margin-inline: auto;
	}
</style>