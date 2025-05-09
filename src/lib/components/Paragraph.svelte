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
		font-family: var(--body-font);
		line-height: var(--line-normal);
		margin-block: var(--medium-size);
	}
</style>