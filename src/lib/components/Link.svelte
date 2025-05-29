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
		color:
		var(--light, var(--accent-500))
		var(--dark, var(--accent-300));
		&:not(:hover, :focus) {
			text-decoration: none;
		}
		&:active {
			color:
			var(--light, var(--accent-550))
			var(--dark, var(--accent-350));
		}
	}
</style>