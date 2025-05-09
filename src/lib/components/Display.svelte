<script lang="ts">
	import type { Snippet } from "svelte";

	let { children, level }: {
		children: Snippet,
		level:
			"title" | "subtitle" |
			"heading" | "subheading" |
			"section" | "subsection"
	} = $props();
</script>

{#if level === "title"}
	<h1>{@render children()}</h1>
{/if}
{#if level === "subtitle"}
	<h2>{@render children()}</h2>
{/if}
{#if level === "heading"}
	<h3>{@render children()}</h3>
{/if}
{#if level === "subheading"}
	<h4>{@render children()}</h4>
{/if}
{#if level === "section"}
	<h5>{@render children()}</h5>
{/if}
{#if level === "subsection"}
	<h6>{@render children()}</h6>
{/if}

<style>
	h1, h2, h3, h4, h5, h6 {
		transition: font-size var(--fast-time) var(--ease-out);
		font-family: var(--display-font);
		line-height: var(--line-short);
	}

	h1, h3, h5 {
		font-weight: var(--regular-font);
		margin-block: var(--large-size) var(--3x-small-size);
	}

	h2, h4, h6 {
		color: var(--primary-gray);
		font-weight: var(--light-font);
		margin-block: 0 var(--large-size);
	}

	h1 {
		font-size:
		var(--is-watch, var(--4x-large-font))
		var(--is-phone, var(--5x-large-font))
		var(--is-tablet, var(--6x-large-font))
		var(--is-laptop, var(--7x-large-font))
		var(--is-desktop, var(--8x-large-font));
		font-weight: var(--bold-font);
		margin-block-start: var(--x-large-size);
	}

	h2 {
		font-size:
		var(--is-watch, var(--3x-large-font))
		var(--is-phone, var(--4x-large-font))
		var(--is-tablet, var(--5x-large-font))
		var(--is-laptop-to-desktop, var(--6x-large-font));
	}

	h3 {
		font-size:
		var(--is-watch, var(--2x-large-font))
		var(--is-phone, var(--3x-large-font))
		var(--is-tablet-to-desktop, var(--4x-large-font));
	}

	h4 {
		font-size:
		var(--is-watch, var(--x-large-font))
		var(--is-phone, var(--2x-large-font))
		var(--is-tablet-to-desktop, var(--3x-large-font));
	}

	h5 {
		font-size:
		var(--is-watch, var(--large-font))
		var(--is-phone-to-desktop, var(--x-large-font));
	}

	h6 {
		font-size:
		var(--is-watch, var(--medium-font))
		var(--is-phone-to-desktop, var(--large-font));
	}
</style>