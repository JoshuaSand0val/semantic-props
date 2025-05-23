<script lang="ts">
	import type { Snippet } from "svelte";

	let { children, to }: {
		children: Snippet,
		to: string
	} = $props();
</script>

<a class="container" href={to}>
	{@render children()}
</a>

<style>
	.container {
		text-shadow: var(--text-stroke-shadow);
		color: var(--accent-4);
		&:not(:hover, :focus) {
			text-decoration: none;
		}
		&:active {
			color: var(--accent-5);
		}
	}
</style>