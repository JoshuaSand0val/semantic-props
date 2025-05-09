<script>
	let { children } = $props();
</script>

<div class="container">
	{@render children()}
</div>

<style>
	:global {
		@import "sanitize.css";
		@import "semantic-props";
	}

	:global(:root) {
		display: block;
		background-color: var(--primary-background);
		color: var(--primary-neutral);
	}
</style>