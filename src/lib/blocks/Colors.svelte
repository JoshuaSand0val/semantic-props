<script lang="ts">
    import ColorSwatch from "$lib/components/ColorSwatch.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";

	/** Returns ColorSwatch value, weights 100 to 900. */
	const weights = (color: string, prefix: string): Record<string, string> => {
		let swatch = {};
		for (let weight = 100; weight <= 900; weight += 50) {
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
	<div class="container">
		<div class="group">
			{#each [contextualLayer, contextualContrast] as swatch}
			<ColorSwatch colors={swatch}/>
			{/each}
		</div>
		{#each palette as swatch}
		<ColorSwatch colors={swatch}/>
		{/each}
	</div>
</Divider>

<style>
	.container {
		--column-width: var(--smallest-container);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--column-width)), 1fr));
		align-items: stretch;
		gap: var(--2x-small);
		padding-right: max(var(--margin-size), var(--safe-right));
		padding-left: max(var(--margin-size), var(--safe-left));
		margin-inline: calc((min(100vi, 3840px) - 100%) * -0.5);
		margin-block: var(--2x-large);
		transition: padding var(--faster-time) var(--ease-in);
		@media (--laptop) {
			--column-width: var(--smaller-container);
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