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
		flex-flow: row nowrap;
		border: 1px var(--border-style) var(--neutral-800);
		margin: 0;
		scroll-snap-type: x mandatory;
		overflow: auto;
	}

	.color {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: start;
		gap: var(--4x-small) var(--2x-small);
		list-style: none;
		inline-size: 100%;
		font-size: var(--medium);
		font-family: var(--display-family);
		line-height: var(--short-line);
		background-color: currentColor;
		color: var(--prop, transparent);
		padding-inline: var(--small);
		padding-block: var(--x-small);
		scroll-snap-align: start;
		flex: 1 0 calc(100% - var(--x-small));
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