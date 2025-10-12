<script lang="ts">
	import type { Snippet } from "svelte";

	let { title, children, open = true, id }: {
		title: string,
		children: Snippet,
		open?: boolean,
		id?: string
	} = $props();

	let opened: boolean = $state(open);
</script>

<article class="container" data-open={opened} id={id}>
	<button class="summary" onclick={() => (opened = !opened)}>
		{title}
	</button>
	<div class="content">
		{@render children()}
	</div>
</article>

<style>
	.container {
		display: block;
		overflow: clip;
	}

	.summary {
		all: unset;
		display: block;
		width: 100%;
		font-size: var(--large);
		font-family: var(--display-family);
		font-weight: var(--light-weight);
		line-height: var(--shorter-line);
		border-block-end: 1px var(--border-style) var(--foreground-color);
		color: var(--low-contrast-color);
		padding-block-end: var(--2x-small);
		padding-inline-start: 1px;
		margin-block: var(--3x-large) var(--x-large);
		&::before {
			content: "‹";
			margin-inline: 1ch;
			float: right;
		}
		[data-open="true"] &::before {
			transform: rotate(-90deg);
		}
	}

	.content {
		display: none;
		height: 0;
		transition: all var(--fast-time) var(--ease-in);
		transition-behavior: allow-discrete;
		[data-open="true"] & {
			display: block;
			height: auto;
			height: calc-size(auto, size);
			@starting-style {
				height: 0;
			}
		}
	}
</style>