<script lang="ts">
	import type { Snippet } from "svelte";

	let { children }: {
		children: Snippet
	} = $props();
</script>

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		transition: all var(--faster-time) var(--ease-in);
		transition-property: padding, margin;
	}

	.container {
		display: block;
		inline-size: min(var(--largest-container), 100%);
		font-family: var(--body-family);
		line-height: var(--normal-line);
		word-spacing: var(--normal-word);
		letter-spacing: var(--normal-letter);
		padding-right: max(var(--safe-right), var(--margin-size));
		padding-left: max(var(--safe-left), var(--margin-size));
		margin-inline: auto;
		margin-block: var(--medium);
	}
</style>