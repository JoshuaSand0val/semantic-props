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
		margin-block: var(--3x-large) var(--4x-large);
	}

	summary {
		display: flex;
		flex-flow: row wrap;
		gap: 0 1ch;
		font-size: var(--x-large);
		font-family: var(--display-family);
		line-height: var(--shorter-line);
		border-block-end: 1px var(--border-style) var(--tertiary-color);
		color: var(--medium-contrast-color);
		padding-block-end: var(--2x-small);
		padding-inline-start: 1px;
		list-style: none;
		&::marker,
		&::-webkit-details-marker {
			display: none;
		}
		&::after {
			content: "‹";
			margin-inline: 1ch;
			margin-inline-start: auto;
		}
		details[open] &::after {
			transform: rotate(-90deg);
		}
	}
</style>