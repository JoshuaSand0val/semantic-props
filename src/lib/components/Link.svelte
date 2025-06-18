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
		&:not(:hover, :focus) {
			text-decoration: none;
		}
		@media (--dark) {
			color: var(--accent-300);
		}
	}

	.container:active {
		color: var(--accent-550);
		@media (--dark) {
			color: var(--accent-350);
		}
	}
</style>