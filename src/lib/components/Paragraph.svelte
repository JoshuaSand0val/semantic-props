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
		margin-block: var(--large);
		:global(code) {
			display: inline;
			border-radius: var(--smallest-radius);
			background-color: var(--gray-150);
			color: var(--medium-contrast-color);
			font-family: var(--mono-family);
			font-size: var(--small);
			line-height: var(--tall-line);
			padding-inline: var(--2x-small);
			padding-block: var(--4x-small);
			margin-block: var(--4x-small);
			@media (--dark) {
				background-color: var(--gray-800);
			}
		}
		:global(strong, b) {
			font-weight: var(--bold-weight);
		}
	}
</style>