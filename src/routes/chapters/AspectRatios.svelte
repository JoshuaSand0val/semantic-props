<script lang="ts">
	import Code from "$lib/components/Code.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";

	const ratios = {
		"Square Ratio": "var(--square-ratio)",
		"Landscape Ratio": "var(--landscape-ratio)",
		"Portrait Ratio": "var(--portrait-ratio)",
		"Video Ratio": "var(--video-ratio)",
		"Wide Ratio": "var(--wide-ratio)"
	};
</script>

<Divider title="Aspect Ratios" id="aspectratios">
	<Paragraph>Semantic Props provides CSS <Code lang="CSS" code="aspect-ratio" /> values for various types of media.</Paragraph>
	<div class="container">
		{#each Object.entries(ratios) as [ratio, prop]}
		<div class="item">
			<span class="ratio" style:--prop={prop}>{ratio}</span>
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