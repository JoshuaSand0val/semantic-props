<script lang="ts">
	import Code from "$lib/components/Code.svelte";
    import Divider from "$lib/components/Divider.svelte";

	const ratios = {
		"Square Ratio": "var(--square-ratio)",
		"Landscape Ratio": "var(--landscape-ratio)",
		"Portrait Ratio": "var(--portrait-ratio)",
		"Video Ratio": "var(--video-ratio)",
		"Wide Ratio": "var(--wide-ratio)"
	};
</script>

<Divider title="Aspect Ratios" id="aspectratios">
	<p>Semantic Props provides CSS <Code lang="css" code="aspect-ratio" /> values for various types of media.</p>
	<div class="container">
		{#each Object.entries(ratios) as [ratio, prop]}
		<div class="item">
			<span class="ratio" style:--prop={prop}>{ratio}</span>
			<code class="prop">{prop}</code>
		</div>
		{/each}
	</div>
</Divider>

<style>
	.container {
		display: grid;
		display: grid-lanes;
		grid-template-columns: repeat(1, 1fr);
		gap: var(--large);
		padding-block: var(--3x-small);
		margin-block: var(--2x-large);
		@media (--small-viewport) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (--medium-viewport) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media (--large-viewport) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.item {
		display: block;
		text-align: center;
		filter: var(--light-shadow);
	}

	.ratio {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		font-size: var(--medium);
		font-family: var(--display-family);
		aspect-ratio: var(--prop, 1);
		background-color: var(--background-color);
		border: var(--3x-small) solid var(--low-contrast-color);
		border-radius: var(--small-radius);
		color: var(--medium-contrast-color);
		padding: var(--medium);
		margin-inline: auto;
		overflow: hidden;
		@media (--small-viewport) {
			font-size: var(--large);
		}
		@media (--medium-viewport) {
			font-size: var(--x-large);
		}
	}

	.prop {
		display: block;
		font-family: var(--mono-family);
		font-size: var(--small);
		color: var(--low-contrast-color);
		margin-block: var(--x-small);
		@media (--small-viewport) {
			font-size: var(--medium);
		}
	}
</style>