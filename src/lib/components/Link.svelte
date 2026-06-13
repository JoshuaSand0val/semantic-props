<script lang="ts">
	import type { Snippet } from "svelte";

	let { children, to, target }: {
		children: Snippet,
		to: string,
		target?: string
	} = $props();
</script>

<a class="container" href={to} target={target ?? "_self"}>
	{@render children()}
</a>

<style>
	.container {
		color: var(--accent-500);
		&:not(:hover, :focus) {
			text-decoration: none;
		}
		@container style(--colorway: dark) {
			color: var(--accent-300);
		}
	}

	.container:active {
		color: var(--accent-600);
		@container style(--colorway: dark) {
			color: var(--accent-400);
		}
	}
</style>