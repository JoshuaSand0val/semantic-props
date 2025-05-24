<script lang="ts">
    import ColorSwatch from "$lib/components/ColorSwatch.svelte";
    import Divider from "$lib/components/Divider.svelte";

	/** Returns ColorSwatch value, weights 100 to 900. */
	const weights = ([color, prefix]: string[]) => {
		let swatch = {};
		for (let weight = 100; weight <= 900; weight += 50) {
			swatch = { ...swatch, [`${color} ${weight}`]: `var(${prefix}-${weight})` };
		}
		return swatch;
	};

	/** Color Palette Swatches. */
	const colorPalette = [
		weights(["Accent", "--accent"]),	
		weights(["Blue", "--blue"]),	
		weights(["Green", "--green"]),	
		weights(["Indigo", "--indigo"]),	
		weights(["Neutral", "--neutral"]),	
		weights(["Orange", "--orange"]),	
		weights(["Red", "--red"]),	
		weights(["Violet", "--violet"]),	
		weights(["Yellow", "--yellow"])	
	];

	/** Priority Alias Swatches. */
	const priorityAlias = {
		"Primary Color": "var(--primary-color)",
		"Secondary Color": "var(--secondary-color)",
		"Tertiary Color": "var(--tertiary-color)"
	};

	/** Contrast Alias Swatches. */
	const contrastAlias = {
		"High Contrast Color": "var(--high-contrast-color)",
		"Medium Contrast Color": "var(--medium-contrast-color)",
		"Low Contrast Color": "var(--low-contrast-color)"
	};

	/** All Color Swatches. */
	const swatches = [
		...colorPalette,
		priorityAlias,
		contrastAlias
	];
</script>

<Divider title="Color Palette and Schemes">
	<div class="container">
		{#each swatches as swatch}
		<ColorSwatch colors={swatch}/>
		{/each}
	</div>
</Divider>

<style>
	.container {
		display: flex;
		flex-flow: row wrap;
		align-items: start;
		gap: var(--2x-small);
		padding-inline: calc((100vi - 100%) * 0.5);
		margin-inline: calc((100vi - 100%) * -0.5);
		scroll-padding: var(--2x-small);
		scrollbar-width: none;
		overflow: auto;
		:global(& > *) {
			flex: 1 0 var(--smallest-container);
		}
	}

</style>