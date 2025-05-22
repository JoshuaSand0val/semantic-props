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
		color: var(--primary-accent-color);
		&:not(:hover, :focus) {
			text-decoration: none;
		}
		&:active {
			color: var(--secondary-accent-color);
		}
	}
</style>