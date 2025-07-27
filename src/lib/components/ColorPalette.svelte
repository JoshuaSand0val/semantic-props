<script lang="ts">
	/** Semantic Props color palettes. */
	const palettes: Record<string, `var(${string})`>[] = [{
		"White": "var(--white)",
		"Black": "var(--black)",
		"Background Color": "var(--background-color)",
		"Middleground Color": "var(--middleground-color)",
		"Foreground Color": "var(--foreground-color)",
		"High Contrast Color": "var(--high-contrast-color)",
		"Medium Contrast Color": "var(--medium-contrast-color)",
		"Low Contrast Color": "var(--low-contrast-color)"
	}];

	Object.entries({
		"Accent": "accent",
		"Blue": "blue",
		"Brown": "brown",
		"Coral": "coral",
		"Cyan": "cyan",
		"Gray": "gray",
		"Green": "green",
		"Indigo": "indigo",
		"Lime": "lime",
		"Magenta": "magenta",
		"Orange": "orange",
		"Pink": "pink",
		"Red": "red",	
		"Violet": "violet",
		"Yellow": "yellow"
	}).forEach(([color, prefix]) => {
		const weights: Record<string, `var(${string})`> = {};

		for (let weight = 50; weight <= 950; weight += 50) {
			weights[`${color} ${weight}`] = `var(--${prefix}-${weight})`;
		}

		palettes.push(weights);
	});
</script>

<div class="container">
	{#each palettes as palette}
	<dl class="palette">
		{#each Object.entries(palette) as [color, prop]}
		<span class="color" style:--prop={prop}>
			<dt class="name">{color}</dt>
			<dd class="prop">{prop}</dd>
		</span>
		{/each}
	</dl>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-flow: row wrap;
		justify-content: start;
		align-items: stretch;
		gap: var(--2x-small);
	}

	.palette {
		display: flex;
		flex-flow: row wrap;
		gap: var(--4x-small);
		inline-size: min(100%, var(--smaller-container));
		margin-block: 0;
		overflow: hidden;
		flex: 1 0 auto;
	}

	.color {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-content: start;
		gap: 0 var(--x-small);
		inline-size: var(--smallest-container);
		background-color: var(--prop);
		padding-inline: var(--x-small);
		padding-block: var(--2x-small);
		flex: 1 0 auto;
	}

	.name, .prop {
		display: block;
		font-size: var(--small);
		filter: invert(1) saturate(0) contrast(9999);
		color: var(--prop);
		margin: 0;
	}

	.name {
		font-family: var(--display-family);
	}

	.prop {
		font-family: var(--mono-family);
		opacity: var(--high-opacity);
	}
</style>