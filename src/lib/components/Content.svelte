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
		inline-size: min(100%, var(--largest-container));
		padding-right: max(var(--safe-right), var(--margin-size));
		padding-left: max(var(--safe-left), var(--margin-size));
		margin-inline: auto;
		:global(& &) {
			padding-inline: var(--margin-size);
		}
	}

	.content {
		display: block;
		font-family: var(--body-family);
		font-weight: var(--regular-weight);
		line-height: var(--normal-line);
		word-spacing: var(--normal-word);
		letter-spacing: var(--normal-letter);
		margin-block: min(var(--margin-size), var(--large));
	}
</style>