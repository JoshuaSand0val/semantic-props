<script lang="ts">
	import type { Snippet } from "svelte";

	let { children }: {
		children: Snippet
	} = $props();
</script>

<div class="container">
	<div class="content">
		{@render children()}
	</div>
</div>

<style>
	.container {
		display: block;
		margin-right: max(var(--safe-right), var(--margin-size));
		margin-left: max(var(--safe-left), var(--margin-size));
		:global(& &) {
			margin-inline: var(--margin-size);
		}
	}

	.content {
		display: block;
		inline-size: min(100%, var(--largest-container));
		font-family: var(--body-family);
		font-weight: var(--regular-weight);
		line-height: var(--normal-line);
		word-spacing: var(--normal-word);
		letter-spacing: var(--normal-letter);
		margin-block: min(var(--margin-size), var(--large));
		margin-inline: auto;
	}
</style>