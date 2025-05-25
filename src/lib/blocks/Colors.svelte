<script lang="ts">
    import ColorSwatch from "$lib/components/ColorSwatch.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";

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

	/** Stroke Color Swatches. */
	const strokes = {
		"Light Stroke Color": "var(--light-stroke-color)",
		"Dark Stroke Color": "var(--dark-stroke-color)",
		"Stroke Color": "var(--stroke-color)"
	};
</script>

<Divider title="Color Palette and Booleans" id="colors">
	<Paragraph>
		Semantic Props provides a simple but expansive color palette.<br>
		Color schemes can be forced via classes <code>light</code> and <code>dark</code>.
		Combine for the system color scheme.
	</Paragraph>
	<Paragraph>
		Colors schemes can be targeted using the boolean Semantic Props <code>--light</code> and <code>--dark</code>.<br>
		Example use: <code>color: var(<b>--light</b>, black) var(<b>--dark</b>, white);</code>
	</Paragraph>
	<div class="container">
		{#each colorPalette as swatch}
		<ColorSwatch colors={swatch}/>
		{/each}
		<div class="group">
			{#each [priorityAlias, contrastAlias, strokes] as swatch}
			<ColorSwatch colors={swatch}/>
			{/each}
		</div>
	</div>
</Divider>

<style>
	.container {
		--column-width:
		var(--watch-to-tablet, minmax(min(100%, var(--smallest-container)), 1fr))
		var(--laptop-to-desktop, min(100%, var(--smaller-container)));
		display: grid;
		grid-template-columns: repeat(auto-fit, var(--column-width));
		justify-content: center;
		align-items: stretch;
		gap: var(--2x-small);
		padding-right: max(var(--margin-size), var(--safe-right));
		padding-left: max(var(--margin-size), var(--safe-left));
		margin-inline: calc((100vi - 100%) * -0.5);
		margin-block: var(--2x-large);
		transition: padding var(--faster-time) var(--ease-in);
	}

	.group {
		display:
		var(--watch-to-tablet, contents)
		var(--laptop-to-desktop, flex);
		flex-flow: row wrap;
		gap: inherit;
		:global(& > *) {
			flex: 1 1 auto;
		}
	}
</style>