<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";

	const ratios = {
		"Square Ratio": "--square-ratio",
		"Landscape Ratio": "--landscape-ratio",
		"Portrait Ratio": "--portrait-ratio",
		"Video Ratio": "--video-ratio",
		"Wide Ratio": "--wide-ratio"
	};
</script>

<Divider title="Aspect Ratios" id="aspectratios">
	<Paragraph>Semantic Props provides CSS <code>aspect-ratio</code> values for various types of media.</Paragraph>
	<div class="container">
		{#each Object.entries(ratios) as [ratio, prop]}
		<div class="item">
			<span class="ratio" style:--prop={`var(${prop})`}>{ratio}</span>
			<code class="prop">var({prop})</code>
		</div>
		{/each}
	</div>
</Divider>

<style>
	.container {
		display: block;
		column-count: 1;
		column-gap: var(--large);
		column-fill: balance;
		padding-block: var(--3x-small);
		margin-block: var(--2x-large);
		@media (--phone) {
			column-count: 2;
		}
		@media (--tablet) {
			column-count: 3;
		}
		@media (--desktop) {
			column-count: 4;
		}
	}

	.item {
		display: block;
		break-inside: avoid;
		text-align: center;
		margin-block-end: var(--3x-large);
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
		border: var(--3x-small) solid var(--gray-300);
		border-radius: var(--smallest-radius);
		background-color: var(--background-color);
		background-clip: content-box;
		color: var(--low-contrast-color);
		padding: var(--medium);
		margin-inline: auto;
		overflow: hidden;
		@media (--dark) {
			border-color: var(--gray-700);			
		}
		@media (--phone) {
			font-size: var(--large);
		}
		@media (--tablet) {
			font-size: var(--x-large);
		}
	}

	.prop {
		display: block;
		font-family: var(--mono-family);
		font-size: var(--small);
		color: var(--low-contrast-color);
		margin-block: var(--x-small);
		@media (--phone) {
			font-size: var(--medium);
		}
	}
</style>