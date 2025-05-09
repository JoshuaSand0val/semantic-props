<script lang="ts">
	import type { Snippet } from "svelte";

	interface props {
		children: Snippet,
		to: string
	}

	let { children, to }: props = $props();
</script>

<a class="container" href={to}>
	{@render children()}
</a>

<style>
	.container {
		color: var(--primary-accent);
		&:not(:hover, :focus) {
			text-decoration: none;
		}
		&:active {
			color: var(--secondary-accent);
		}
	}
</style>