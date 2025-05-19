<script lang="ts">
	import type { Snippet } from "svelte";

	let { children }: {
		children: Snippet
	} = $props();
</script>

<div class="container">
	<div class="wrapper">
		{@render children()}
	</div>
</div>

<style>
	.container, .wrapper {
		transition: margin var(--faster-time) var(--ease-in);
	}

	.container {
		display: block;
		font-family: var(--body-family);
		line-height: var(--normal-line);
		word-spacing: var(--normal-word);
		letter-spacing: var(--normal-letter);
		margin-right: max(var(--safe-right), var(--margin-size));
		margin-left: max(var(--safe-left), var(--margin-size));
		overflow: hidden;
	}

	.wrapper {
		display: block;
		inline-size: min(var(--largest-container), 100%);
		margin-inline: auto;
		margin-block: var(--medium);
	}
</style>