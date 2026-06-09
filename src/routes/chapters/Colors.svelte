<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";

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

		for (let weight = 100; weight <= 900; weight += 100) {
			weights[`${color} ${weight}`] = `var(--${prefix}-${weight})`;
		}

		palettes.push(weights);
	});
</script>

<Divider title="Color Palette" id="colors">
	<p>Semantic Props provides a simple but expansive color palette.</p>
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
</Divider>

<style>
	.container {
		display: grid;
		grid-template-rows: repeat(2, 1fr); 
		grid-auto-flow: column; 
		grid-auto-columns: min(100%, var(--medium-container));
		justify-content: start;
		align-items: stretch;
		gap: var(--2x-small);
		scroll-snap-type: inline mandatory;
		overflow: auto;
		filter: var(--light-shadow);
	}

	.palette {
		display: flex;
		flex-flow: column nowrap;
		border: 1px solid var(--foreground-color);
		border-radius: var(--small-radius);
		margin-block: 0;
		scroll-snap-align: center;
		overflow: hidden;
	}

	.color {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		gap: 0 var(--small);
		background-color: var(--prop);
		padding: var(--x-small);
		flex: 1 0 auto;
	}

	.name, .prop {
		display: block;
		line-height: var(--short-line);
		font-size: var(--small);
		filter: invert(1) saturate(0) contrast(9999);
		color: var(--prop);
		margin: 0;
		@supports (color: contrast-color(white)) {
			color: contrast-color(var(--prop));
			filter: none;
		}
	}

	.name {
		font-family: var(--display-family);
		font-weight: var(--bold-weight);
	}

	.prop {
		font-family: var(--mono-family);
		font-weight: var(--light-weight);
		opacity: var(--medium-opacity);
	}
</style>