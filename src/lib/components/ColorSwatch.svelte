<script lang="ts">
	let { colors }: {
		colors: Record<string, string>
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
		max-block-size: max(var(--smallest-container), 80vb);
		border-radius: var(--smallest-radius);
		border: 1px var(--border-style) var(--tertiary-color);
		margin: 0;
		scroll-snap-type: both mandatory;
		overflow: auto;
	}

	.color {
		position: relative;
		display: flex;
		flex-direction: var(--watch-to-tablet, column) var(--laptop-to-desktop, row);
		flex-wrap: wrap;
		justify-content:
		var(--watch-to-tablet, start)
		var(--laptop-to-desktop, space-between);
		align-content: start;
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
		overflow: auto;
	}

	.prop, .name {
		display: block;
		font-size: var(--small);
		filter: invert(1) saturate(0) contrast(9999);
		flex: 0 0 auto;
		margin: 0;
	}

	.prop {
		font-family: var(--mono-family);
		opacity: var(--high-opacity);
	}
</style>