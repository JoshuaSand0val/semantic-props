<script lang="ts">
    import ColorSwatch from "$lib/components/ColorSwatch.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";

	/** White/Black Swatch. */
	const whiteBlack: Record<string, string> = {
		"White": "--white",
		"Black": "--black"
	};

	/** Returns ColorSwatch value, weights 50 to 950. */
	const weights = (color: string, prefix: string): Record<string, string> => {
		let swatch = {};
		for (let weight = 50; weight <= 950; weight += 50) {
			swatch = { ...swatch, [`${color} ${weight}`]: `${prefix}-${weight}` };
		}
		return swatch;
	};

	/** Color Palette Swatches. */
	const palette: Record<string, string>[] = [
		weights("Accent", "--accent"),
		weights("Blue", "--blue"),
		weights("Brown", "--brown"),
		weights("Coral", "--coral"),
		weights("Cyan", "--cyan"),
		weights("Gray", "--gray"),
		weights("Green", "--green"),
		weights("Indigo", "--indigo"),
		weights("Lime", "--lime"),
		weights("Magenta", "--magenta"),
		weights("Orange", "--orange"),
		weights("Pink", "--pink"),
		weights("Red", "--red"),	
		weights("Violet", "--violet"),
		weights("Yellow", "--yellow")
	];

	/** Layer Contextual Swatch. */
	const contextualLayer: Record<string, string> = {
		"Background Color": "--background-color",
		"Middleground Color": "--middleground-color",
		"Foreground Color": "--foreground-color"
	};

	/** Contrast Contextual Swatch. */
	const contextualContrast: Record<string, string> = {
		"High Contrast Color": "--high-contrast-color",
		"Medium Contrast Color": "--medium-contrast-color",
		"Low Contrast Color": "--low-contrast-color"
	};
</script>

<Divider title="Color Palette" id="colors">
	<Paragraph>
		Semantic Props provides a simple but expansive color palette.
	</Paragraph>
	<div class="container scroll">
		<div class="group">
			{#each [whiteBlack, contextualLayer, contextualContrast] as swatch}
			<ColorSwatch colors={swatch}/>
			{/each}
		</div>
		{#each palette as swatch}
		<ColorSwatch colors={swatch}/>
		{/each}
	</div>
</Divider>

<style>
	@import "$lib/styles/scroll.css";

	.container {
		--column-width: var(--smallest-container);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--column-width)), 1fr));
		align-items: stretch;
		gap: var(--2x-small);
		padding-inline: calc((100vi - 100%) * 0.5);
		margin-inline: calc((100vi - 100%) * -0.5);
		margin-block: var(--2x-large);
		@media (--laptop) {
			--column-width: var(--small-container);
			display: flex;
			flex-flow: row nowrap;
			scroll-snap-type: inline mandatory;
			:global(& > *) {
				flex: 0 0 var(--column-width);
				scroll-snap-align: center;
			}
		}
	}

	.group {
		display: contents;
		flex-flow: row wrap;
		gap: inherit;
		@media (--laptop) {
			display: flex;
		}
		:global(& > *) {
			flex: 1 1 auto;
		}
	}
</style>