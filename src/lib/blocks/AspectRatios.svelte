<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";

	const ratios = {
		"Square Ratio": "var(--square-ratio)",
		"Landscape Ratio":"var(--landscape-ratio)",
		"Portrait Ratio":"var(--portrait-ratio)",
		"Video Ratio":"var(--video-ratio)",
		"Wide Ratio":"var(--wide-ratio)"
	};
</script>

<Divider title="Aspect Ratios" id="aspectratios">
	<Paragraph>Semantic Props provides CSS <code>aspect-ratio</code> values for various types of media.</Paragraph>
	<div class="container scroll">
		{#each Object.entries(ratios) as [ratio, prop]}
		<div class="item">
			<span class="ratio" style:--prop={prop}>{ratio}</span>
			<code class="prop">{prop}</code>
		</div>
		{/each}
	</div>
</Divider>

<style>
	@import "../styles/scroll.css";

	.container {
		display: block;
		column-count:
		var(--watch, 1)
		var(--phone, 2)
		var(--tablet-to-laptop, 3)
		var(--desktop, 4);
		column-gap: var(--large);
		column-fill: balance;
		padding-inline: calc((100vi - 100%) * 0.5);
		padding-block: var(--3x-small);
		margin-inline: calc((100vi - 100%) * -0.5);
		margin-block: var(--2x-large);
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
		font-size:
		var(--watch-to-phone, var(--small))
		var(--tablet, var(--large))
		var(--laptop-to-desktop, var(--x-large));
		font-family: var(--display-family);
		aspect-ratio: var(--prop, 1);
		border-radius: var(--smallest-radius);
		background-color: var(--primary-color);
		background-clip: content-box;
		color: var(--low-contrast-color);
		box-shadow: var(--lightest-box-shadow);
		padding: var(--3x-small);
		overflow: hidden;
		&::before, &::after {
			content: "";
			position: absolute;
			z-index: -1;
			inset: 0;
			background-color:
			var(--light, var(--neutral-300))
			var(--dark, var(--neutral-600));
		}
	}

	.prop {
		display: block;
		text-align: center;
		font-family: var(--mono-family);
		font-size: var(--small);
		font-size:
		var(--watch-to-phone, var(--x-small))
		var(--tablet, var(--small))
		var(--laptop-to-desktop, var(--medium));
		color: var(--medium-contrast-color);
		margin-block: var(--x-small);
	}
</style>