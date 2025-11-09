<script lang="ts">
	import Code from "$lib/components/Code.svelte";
    import Divider from "$lib/components/Divider.svelte";

	const ZIndex: Record<string, string> = {
		"Z-Bottom": "var(--z-bottom)",
		"Z-Relative": "var(--z-relative)",
		"Z-Absolute": "var(--z-absolute)",
		"Z-Sticky": "var(--z-sticky)",
		"Z-Fixed": "var(--z-fixed)",
		"Z-Top": "var(--z-top)"
	};
</script>

<Divider title="Z-Index Positions" id="zindex">
	<p>Semantic Props provides CSS <Code lang="css" code="z-index" /> values for positioning.</p>
	<div class="container">
		{#each Object.entries(ZIndex) as [title, prop]}
		<span class="demo" style:--prop={prop}>
			<span class="title">{title}</span>
			<code class="prop">{prop}</code>
		</span>
		{/each}
	</div>
</Divider>

<style>
	.container {
		--demo-inline-size: var(--small-container);
		position: relative;
		z-index: 0;
		display: flex;
		flex-flow: row nowrap;
		justify-content: start;
		inline-size: 100%;
		gap: var(--large);
		padding-inline-end: calc(100% - var(--demo-inline-size));
		margin-block: var(--3x-large);
		scroll-snap-type: inline proximity;
		filter: var(--lightest-shadow);
		overflow: auto;
	}

	.demo {
		position: sticky;
		left: 0;
		z-index: var(--prop);
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		inline-size: min(100%, var(--demo-inline-size));
		border: var(--4x-small) solid var(--low-contrast-color);
		border-radius: var(--small-radius);
		background-color: var(--background-color);
		scroll-snap-align: start;
		padding-inline: var(--large);
		padding-block: var(--3x-large);
		margin-block: var(--3x-small);
		flex: 0 0 auto;
	}

	.title {
		display: block;
		font-size: var(--large);
		font-family: var(--display-family);
		color: var(--low-contrast-color);
	}

	.prop {
		display: block;
		font-size: var(--small);
		font-family: var(--mono-family);
		line-height: var(--short-line);
		color: var(--low-contrast-color);
	}
</style>