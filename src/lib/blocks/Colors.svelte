<script lang="ts">
    import ColorSwatch from "$lib/components/ColorSwatch.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";
    import ReferenceTable from "$lib/components/ReferenceTable.svelte";

	/** Returns ColorSwatch value, weights 100 to 900. */
	const weights = ([color, prefix]: string[]) => {
		let swatch = {};
		for (let weight = 100; weight <= 900; weight += 50) {
			swatch = { ...swatch, [`${color} ${weight}`]: `${prefix}-${weight}` };
		}
		return swatch;
	};

	/** Color Palette Swatches. */
	const accent = weights(["Accent", "--accent"]);
	const blue = weights(["Blue", "--blue"]);
	const green = weights(["Green", "--green"]);
	const indigo = weights(["Indigo", "--indigo"]);
	const neutral = weights(["Neutral", "--neutral"]);
	const orange = weights(["Orange", "--orange"]);
	const red = weights(["Red", "--red"]);	
	const violet = weights(["Violet", "--violet"]);
	const yellow = weights(["Yellow", "--yellow"]);
	const palette = [accent, blue, green, indigo, neutral, orange, red, violet, yellow];

	/** Priority Alias Swatches. */
	const priorityAlias = {
		"Primary Color": "--primary-color",
		"Secondary Color": "--secondary-color",
		"Tertiary Color": "--tertiary-color"
	};

	/** Contrast Alias Swatches. */
	const contrastAlias = {
		"High Contrast Color": "--high-contrast-color",
		"Medium Contrast Color": "--medium-contrast-color",
		"Low Contrast Color": "--low-contrast-color"
	};

	/** Stroke Color Swatches. */
	const strokes = {
		"Light Stroke Color": "--light-stroke-color",
		"Dark Stroke Color": "--dark-stroke-color",
		"Stroke Color": "--stroke-color"
	};

	/** All Semantic Props referenced. */
	const reference = Object.values({
		...accent,
		...blue,
		...green,
		...indigo,
		...neutral,
		...orange,
		...red,
		...violet,
		...yellow,
		...priorityAlias,
		...contrastAlias,
		...strokes
	});
</script>

<Divider title="Color Palette and Booleans" id="colors">
	<ReferenceTable props={reference} />
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
		{#each palette as swatch}
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
		:global(.laptop) & {
			--column-width: var(--smaller-container);
		}
	}

	.group {
		display: contents;
		flex-flow: row wrap;
		gap: inherit;
		:global(.laptop) & {
			display: flex;
		}
		:global(& > *) {
			flex: 1 1 auto;
		}
	}
</style>