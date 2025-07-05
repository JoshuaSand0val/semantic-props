<script lang="ts">
	/** Semantic Props color palettes. */
	const palettes: Record<string, `var(${string})`>[] = [{
		"White": "var(--white)",
		"Black": "var(--black)"
	}, {
		"Background Color": "var(--background-color)",
		"Middleground Color": "var(--middleground-color)",
		"Foreground Color": "var(--foreground-color)"
	}, {
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
		gap: var(--x-small);
		overflow: auto;
	}

	.palette {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(var(--smaller-container), 100%), 1fr));
		inline-size: min(100%, var(--medium-container));
		border-radius: var(--smaller-radius);
		border: 1px solid var(--foreground-color);
		background-color: var(--middleground-color);
		margin-block: 0;
		overflow: hidden;
		flex: 1 0 auto;
		background: conic-gradient(
			var(--middleground-color) 90deg,
			var(--foreground-color) 90deg 180deg,
			var(--middleground-color) 180deg 270deg,
			var(--foreground-color) 270deg
		);
		background-size: var(--large) var(--large);
	}

	.color {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-content: start;
		gap: 0 var(--x-small);
		min-inline-size: min-content;
		background-color: var(--prop);
		padding-inline: var(--x-small);
		padding-block: var(--2x-small);
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