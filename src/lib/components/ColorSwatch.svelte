<script lang="ts">
	let { colors }: {
		colors: Record<string, `var(--${string})`>
	} = $props();
</script>

<dl class="container">
	{#each Object.entries(colors) as [name, prop]}
	<span style:--prop={prop} class="color">
		<dt class="name">{name}</dt>
		<dd class="prop">{prop}</dd>
	</span>
	{/each}
</dl>

<style>
	.container {
		display: flex;
		flex-direction: var(--watch-to-tablet, row) var(--laptop-to-desktop, column);
		flex-wrap: nowrap;
		max-block-size: max(var(--smallest-container), 60vb);
		border-radius: var(--smallest-radius);
		border: 1px var(--border-style) var(--tertiary-color);
		margin: 0;
		scroll-snap-type: both mandatory;
		overflow: auto;
	}

	.color {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: start;
		gap: var(--4x-small) var(--2x-small);
		inline-size:
		var(--watch-to-tablet, calc(100% - var(--small)))
		var(--laptop-to-desktop, 100%);
		list-style: none;
		font-size: var(--medium);
		font-family: var(--display-family);
		line-height: var(--short-line);
		background-color: currentColor;
		color: var(--prop, transparent);
		padding-inline: var(--small);
		padding-block: var(--2x-small);
		scroll-snap-align: start;
		flex: 1 0 auto;
	}

	.prop, .name {
		display: block;
		font-size: var(--small);
		filter: invert(1) saturate(0) contrast(9999);
		margin: 0;
	}

	.prop {
		opacity: var(--high-opacity);
	}
</style>