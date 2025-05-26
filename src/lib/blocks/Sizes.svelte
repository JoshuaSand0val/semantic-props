<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
	import Paragraph from "$lib/components/Paragraph.svelte";

	const containers: Record<string, string>= {
		"Smallest Container": "var(--smallest-container)",
		"Smaller Container": "var(--smaller-container)",
		"Small Container": "var(--small-container)",
		"Medium Container": "var(--medium-container)",
		"Large Container": "var(--large-container)",
		"Larger Container": "var(--larger-container)",
		"Largest Container": "var(--largest-container)"
	};

	const sizes: Record<string, string> = {
		"Extra Small (4x)": "var(--4x-small)",
		"Extra Small (3x)": "var(--3x-small)",
		"Extra Small (2x)": "var(--2x-small)",
		"Extra Small": "var(--x-small)",
		"Small": "var(--small)",
		"Medium": "var(--medium)",
		"Large": "var(--large)",
		"Extra Large": "var(--x-large)",
		"Extra Large (2x)": "var(--2x-large)",
		"Extra Large (3x)": "var(--3x-large)",
		"Extra Large (4x)": "var(--4x-large)",
		"Extra Large (5x)": "var(--5x-large)",
		"Extra Large (6x)": "var(--6x-large)",
		"Extra Large (7x)": "var(--7x-large)",
		"Extra Large (8x)": "var(--8x-large)",
		"Extra Large (9x)": "var(--9x-large)",
		
		"Smaller": "var(--smaller)",
		"Larger": "var(--larger)",

		"Margin Size": "var(--margin-size)"
	};
</script>

<Divider title="Containers and Spacing/Type Sizes" id="sizes">
	<Paragraph>
		Semantic Props provides containers alongside responsive sizes based on the <code>--scale-ratio</code> prop.<br>
	</Paragraph>
	<div class="graph sizes">
		{#each Object.entries(sizes) as [size, prop]}
		<span class="size" style:--prop={prop}>
			<strong class="title">{size}</strong>
			<small class="prop">{prop}</small>
		</span>
		{/each}
	</div>
	<Paragraph>
		<em>Container sizes shown below are at <strong>0.25x scale</strong> for viewing convenience.</em>
	</Paragraph>
	<div class="graph containers">
		{#each Object.entries(containers) as [container, prop]}
		<span class="size" style:--prop={`calc(${prop} / 4)`}>
			<strong class="title">{container}</strong>
			<small class="prop">{prop}</small>
		</span>
		{/each}
	</div>
</Divider>

<style>
	.graph {
		display: block;
		column-count:
		var(--watch, 1)
		var(--phone, 2)
		var(--tablet, 3)
		var(--laptop-to-desktop, 4);
		column-gap: var(--large);
		column-fill: balance;
		margin-block: var(--3x-large);
	}

	.size {
		display: flex;
		flex-flow: column nowrap;
		justify-content: end;
		align-items: start;
		gap: 0 var(--x-small);
		white-space: nowrap;
		box-sizing: content-box;
		font-size: var(--small);
		line-height: var(--short-line);
		break-inside: avoid;
		margin-block-end: var(--medium);
		overflow: visible;
		flex: 0 0 auto;
		&::after {
			content: "";
			inline-size: 100%;
			block-size: var(--prop);
			border-radius: var(--smallest-radius);
			outline: 1px dashed var(--low-contrast-color);
			box-shadow: var(--lighter-box-shadow);
			margin-block: var(--2x-small);
		}
	}

	.title {
		display: block;
		font-family: var(--display-family);
		font-weight: var(--bold-weight);
		color: var(--medium-contrast-color);
	}

	.prop {
		display: block;
		font-family: var(--mono-family);
		font-weight: var(--regular-weight);
		color: var(--low-contrast-color);	
	}
</style>