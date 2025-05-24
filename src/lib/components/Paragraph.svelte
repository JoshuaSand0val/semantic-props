<script lang="ts">
	import type { Snippet } from "svelte";

	let { children }: {
		children: Snippet
	} = $props();
</script>

<p class="container">
	{@render children()}
</p>

<style>
	.container {
		display: block;
		font-family: var(--body-family);
		line-height: var(--normal-line);
		margin-block: var(--medium);
		:global(code) {
			display: inline;
			border-radius: var(--smallest-radius);
			background-color: var(--neutral-750);
			color: var(--orange-350);
			font-family: var(--mono-family);
			line-height: var(--short-line);
			padding-inline: var(--2x-small);
			padding-block: var(--4x-small);
			margin-block: var(--4x-small);
		}
	}
</style>