<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";
    import ReferenceTable from "$lib/components/ReferenceTable.svelte";

	const ratios = {
		"Square Ratio": "--square-ratio",
		"Landscape Ratio": "--landscape-ratio",
		"Portrait Ratio": "--portrait-ratio",
		"Video Ratio": "--video-ratio",
		"Wide Ratio": "--wide-ratio"
	};

	const reference = Object.values(ratios);
</script>

<Divider title="Aspect Ratios" id="aspectratios">
	<ReferenceTable props={reference} />
	<Paragraph>Semantic Props provides CSS <code>aspect-ratio</code> values for various types of media.</Paragraph>
	<div class="container scroll">
		{#each Object.entries(ratios) as [ratio, prop]}
		<div class="item">
			<span class="ratio" style:--prop={`var(${prop})`}>{ratio}</span>
			<code class="prop">var({prop})</code>
		</div>
		{/each}
	</div>
</Divider>

<style>
	@import "../styles/scroll.css";

	.container {
		display: block;
		column-count: 1;
		column-gap: var(--large);
		column-fill: balance;
		padding-inline: calc((100vi - 100%) * 0.5);
		padding-block: var(--3x-small);
		margin-inline: calc((100vi - 100%) * -0.5);
		margin-block: var(--2x-large);
		:global(.semantic.phone) & {
			column-count: 2;
		}
		:global(.semantic.tablet) & {
			column-count: 3;
		}
		:global(.semantic.desktop) & {
			column-count: 4;
		}
	}

	.item {
		display: block;
		break-inside: avoid;
		margin-block-end: var(--3x-large);
	}

	.ratio {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		font-size: var(--small);
		font-family: var(--display-family);
		aspect-ratio: var(--prop, 1);
		border-radius: var(--smallest-radius);
		background-color: var(--primary-color);
		background-clip: content-box;
		color: var(--low-contrast-color);
		box-shadow: var(--lightest-box-shadow);
		padding: var(--3x-small);
		overflow: hidden;
		:global(.semantic.tablet) & {
			font-size: var(--large);
		}
		:global(.semantic.laptop) & {
			font-size: var(--x-large);
		}
		&::before, &::after {
			content: "";
			position: absolute;
			z-index: -1;
			inset: 0;
			background-color:  var(--neutral-300);
			:global(.semantic.dark) & {
				background-color: var(--neutral-600);			
			}
		}
	}

	.prop {
		display: block;
		text-align: center;
		font-family: var(--mono-family);
		font-size: var(--x-small);
		color: var(--medium-contrast-color);
		margin-block: var(--x-small);
		:global(.semantic.tablet) & {
			font-size: var(--small);
		}
		:global(.semantic.laptop) & {
			font-size: var(--medium);
		}
	}
</style>