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
		color: var(--accent-500);
		:global(.semantic.dark) & {
			color: var(--accent-300);
		}
		&:not(:hover, :focus) {
			text-decoration: none;
		}
		&:active {
			color: var(--accent-550);
			:global(.semantic.dark) & {
				color: var(--accent-350);
			}
		}
	}
</style>