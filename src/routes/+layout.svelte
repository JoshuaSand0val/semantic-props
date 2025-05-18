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
		background-image:
		radial-gradient(var(--secondary-body-color) 15%, transparent 16%),
		linear-gradient(123deg, var(--primary-body-color), var(--secondary-body-color));
		background-size: var(--3x-small) var(--3x-small), 100% 100%;
		background-repeat: repeat;
		color: var(--primary-text-color);
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
		inline-size: min(var(--largest-container), 100%);
		flex: 1 0 auto;
		transition: padding var(--faster-time) var(--ease-in);
		padding: var(--margin-size);
		padding-right: max(var(--safe-right), var(--margin-size));
		padding-left: max(var(--safe-left), var(--margin-size));
		margin-inline: auto;
	}
</style>