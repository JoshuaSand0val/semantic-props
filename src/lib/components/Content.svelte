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
		transition: padding var(--x-fast-time) var(--ease-in);
		padding: var(--margin-size);
		margin-inline: auto;
	}
</style>