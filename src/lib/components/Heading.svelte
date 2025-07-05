<script lang="ts">
	import type { Snippet } from "svelte";

	let { children, level }: {
		children: Snippet,
		level: 1 | 2 | 3 | 4 | 5 | 6
	} = $props();
</script>

<div role="heading" aria-level={level}>
	{@render children()}
</div>

<style>
	[role="heading"] {
		transition: font-size var(--fast-time) var(--ease-out);
		font-family: var(--display-family);
		line-height: var(--short-line);
		margin-block: var(--4x-large) var(--4x-small);
		:global(& + &) {
			margin-block-start: 0;
		}
		:global(&:has(+ :not(&))) {
			margin-block-end: var(--x-large);
		}
	}

	[aria-level="1"],
	[aria-level="3"],
	[aria-level="5"] {
		font-weight: var(--heavy-weight);
	}

	[aria-level="2"],
	[aria-level="4"],
	[aria-level="6"] {
		color: var(--medium-contrast-color);
		font-weight: var(--light-weight);
	}

	[aria-level="1"] {
		font-size: var(--3x-large);
		@media (--phone) {
			font-size: var(--5x-large);
		}
		@media (--tablet) {
			font-size: var(--6x-large);
		}
		@media (--laptop) {
			font-size: var(--7x-large);
		}
		@media (--desktop) {
			font-size: var(--8x-large);
		}
	}

	[aria-level="2"] {
		font-size: var(--2x-large);
		@media (--phone) {
			font-size: var(--4x-large);
		}
		@media (--tablet) {
			font-size: var(--5x-large);
		}
	}

	[aria-level="3"] {
		font-size: var(--x-large);
		@media (--phone) {
			font-size: var(--3x-large);
		}
		@media (--tablet) {
			font-size: var(--4x-large);
		}
	}

	[aria-level="4"] {
		font-size: var(--large);
		@media (--phone) {
			font-size: var(--2x-large);
		}
		@media (--tablet) {
			font-size: var(--3x-large);
		}
	}

	[aria-level="5"] {
		font-size: var(--medium);
		@media (--phone) {
			font-size: var(--x-large);
		}
		@media (--tablet) {
			font-size: var(--2x-large);
		}
	}

	[aria-level="6"] {
		font-size: var(--small);
		@media (--phone) {
			font-size: var(--large);
		}
		@media (--tablet) {
			font-size: var(--x-large);
		}
	}
</style>