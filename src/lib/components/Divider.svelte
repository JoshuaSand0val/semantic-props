<script lang="ts">
	import type { Snippet } from "svelte";

	let { children, title, id, open = true }: {
		children: Snippet,
		title: string,
		id: string,
		open?: boolean
	} = $props();
</script>

<details open={open} id={id}>
	<summary>{title}</summary>
	<div class="content">
		{@render children()}
	</div>
</details>

<style>
	details {
		display: block;
		margin-block: var(--3x-large) var(--4x-large);
	}

	summary {
		display: flex;
		flex-flow: row wrap;
		gap: 0 1ch;
		font-size: var(--large);
		font-family: var(--display-family);
		font-weight: var(--light-weight);
		line-height: var(--shorter-line);
		border-block-end: 1px var(--border-style) var(--foreground-color);
		color: var(--low-contrast-color);
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

	.content {
		margin-block: var(--medium) var(--large);
	}
</style>