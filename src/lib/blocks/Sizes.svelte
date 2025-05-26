<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
	import Paragraph from "$lib/components/Paragraph.svelte";
    import ReferenceTable from "$lib/components/ReferenceTable.svelte";

	const containers: Record<string, string>= {
		"Smallest Container": "--smallest-container",
		"Smaller Container": "--smaller-container",
		"Small Container": "--small-container",
		"Medium Container": "--medium-container",
		"Large Container": "--large-container",
		"Larger Container": "--larger-container",
		"Largest Container": "--largest-container"
	};

	const sizes: Record<string, string> = {
		"Extra Small (4x)": "--4x-small",
		"Extra Small (3x)": "--3x-small",
		"Extra Small (2x)": "--2x-small",
		"Extra Small": "--x-small",
		"Small": "--small",
		"Medium": "--medium",
		"Large": "--large",
		"Extra Large": "--x-large",
		"Extra Large (2x)": "--2x-large",
		"Extra Large (3x)": "--3x-large",
		"Extra Large (4x)": "--4x-large",
		"Extra Large (5x)": "--5x-large",
		"Extra Large (6x)": "--6x-large",
		"Extra Large (7x)": "--7x-large",
		"Extra Large (8x)": "--8x-large",
		"Extra Large (9x)": "--9x-large",
		
		"Smaller": "--smaller",
		"Larger": "--larger",

		"Margin Size": "--margin-size"
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
		<span class="size" style:--prop={`var(${prop})`}>
			<strong class="title">{size}</strong>
			<small class="prop">var({prop})</small>
		</span>
		{/each}
	</div>
	<div class="containers scroll">
		{#each Object.entries(containers) as [container, prop]}
		<span class="size" style:--prop={`var(${prop})`}>
			<strong class="title">{container}</strong>
			<small class="prop">var({prop})</small>
		</span>
		{/each}
	</div>
</Divider>

<style>
	@import "../styles/scroll.css";

	.sizes, .containers {
		display: flex;
		flex-flow: row wrap;
		justify-content: start;
		align-items: end;
		gap: var(--medium);
		padding-inline: calc((100vi - 100%) * 0.5);
		padding-block: 1px;
		margin-inline: calc((100vi - 100%) * -0.5);
		margin-block: var(--3x-large);
		scroll-snap-type: x mandatory;
		scroll-padding: var(--margin-size);
	}

	.size {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		justify-content: start;
		gap: 0 var(--x-small);
		font-size: var(--medium);
		line-height: var(--short-line);
		padding-inline: var(--small);
		padding-block: var(--x-small);
		border-radius: var(--smallest-radius);
		outline: 1px dashed var(--low-contrast-color);
		box-shadow: var(--lightest-box-shadow);
		scroll-snap-align: end;
		flex: 0 0 auto;
		overflow: auto;
	}

	.sizes .size {
		border-inline-end: var(--prop) solid var(--secondary-color);
		&::before {
			content: "";
			position: absolute;
			inset: 0;
			outline: inherit;
		}
	}

	.containers .size {
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