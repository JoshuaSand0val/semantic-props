<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
	import Paragraph from "$lib/components/Paragraph.svelte";
    import ReferenceTable from "$lib/components/ReferenceTable.svelte";

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

	const reference: string[] = Object.values({
		...containers,
		...sizes
	});
</script>

<Divider title="Containers and Spacing/Type Sizes" id="sizes">
	<ReferenceTable props={reference} />

	<Paragraph>
		Semantic Props provides containers alongside responsive sizes based on the <code>--scale-ratio</code> prop.<br>
	</Paragraph>
	<div class="sizes">
		{#each Object.entries(sizes) as [size, prop]}
		<span class="size" style:--prop={prop}>
			<strong class="title">{size}</strong>
			<small class="prop">{prop}</small>
		</span>
		{/each}
	</div>
	<div class="containers">
		{#each Object.entries(containers) as [container, prop]}
		<span class="size" style:--prop={prop}>
			<strong class="title">{container}</strong>
			<small class="prop">{prop}</small>
		</span>
		{/each}
	</div>
</Divider>

<style>
	.sizes, .containers {
		display: flex;
		flex-flow: row wrap;
		justify-content: start;
		align-items: stretch;
		gap: var(--medium);
		padding-inline: calc((100vi - 100%) * 0.5);
		padding-block: 1px;
		margin-inline: calc((100vi - 100%) * -0.5);
		margin-block: var(--3x-large);
		scroll-snap-type: x mandatory;
		scroll-padding: var(--margin-size);
		overflow: auto;
	}

	.size {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		gap: 0 var(--x-small);
		white-space: nowrap;
		font-size: var(--medium);
		line-height: var(--short-line);
		padding-inline: var(--medium);
		padding-block: var(--x-small);
		border-radius: var(--smallest-radius);
		outline: 1px dashed var(--low-contrast-color);
		scroll-snap-align: end;
		flex: 1 1 0;
	}

	.sizes .size {
		align-items: center;
		border: var(--prop) solid transparent;
		&::before {
			content: "";
			position: absolute;
			inset: 0;
			outline: inherit;
			box-shadow: var(--lightest-box-shadow);
		}
	}

	.containers .size {
		align-items: start;
		flex: 0 0 var(--prop);
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