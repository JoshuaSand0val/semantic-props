<script lang="ts">
	import type { Snippet } from "svelte";

	let { children, title, open = true }: {
		children: Snippet,
		title: string,
		open?: boolean
	} = $props();
</script>

<details open={open}>
	<summary>{title}</summary>
	<div class="content">
		{@render children()}
	</div>
</details>

<style>
	details, .content {
		display: block;
		margin-block: var(--2x-large) var(--3x-large);
	}

	summary {
		display: list-item;
		font-size: var(--x-large);
		font-family: var(--display-family);
		line-height: var(--shorter-line);
		border-block-end: 1px var(--border-style) var(--fourth-body-color);
		color: var(--secondary-text-color);
		padding-block-end: var(--3x-small);
		padding-inline-start: 1px;
	}
</style>