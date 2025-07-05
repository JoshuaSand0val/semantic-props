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
		display: block;
		inline-size: 100%;
		padding-right: max(var(--safe-right), var(--margin-size));
		padding-left: max(var(--safe-left), var(--margin-size));
		margin-inline: auto;
		margin-block: var(--medium);
		transition: padding var(--faster-time) var(--ease-in);
	}
</style>