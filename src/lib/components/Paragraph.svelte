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
	}
</style>