<script lang="ts">
	let { colors }: {
		colors: Record<string, string>
	} = $props();
</script>

<dl class="container scroll">
	{#each Object.entries(colors) as [name, prop]}
	<span style:--prop={`var(${prop})`} class="color">
		<dt class="name">{name}</dt>
		<dd class="prop">var({prop})</dd>
	</span>
	{/each}
</dl>

<style>
	@import "../styles/scroll.css";

	.container {
		display: flex;
		flex-flow: row nowrap;
		max-block-size: max(var(--smallest-container), 80vb);
		border-radius: var(--smallest-radius);
		border: 1px var(--border-style) var(--tertiary-color);
		margin: 0;
		scroll-snap-type: both mandatory;
		:global(.laptop) & {
			flex-direction: column;
		}
	}

	.color {
		position: relative;
		display: flex;
		flex-flow: column wrap;
		justify-content: start;
		align-content: start;
		gap: var(--4x-small) var(--2x-small);
		inline-size: calc(100% - var(--small));
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
		:global(.laptop) & {
			flex-direction: row;
			justify-content: space-between;
			inline-size: 100%;
		}
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