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

	const reference: string[] = [
		"--scale-ratio",
		...Object.values({
			...containers,
			...sizes
		})
	];
</script>

<Divider title="Containers and Spacing Sizes" id="sizes">
	<ReferenceTable props={reference} />
	<Paragraph>
		Semantic Props provides containers alongside responsive sizes based on the <code>--scale-ratio</code> prop.<br>
	</Paragraph>
	<div class="size-grid">
		{#each Object.entries(sizes) as [size, prop]}
		<span class="size" style:--prop={`var(${prop})`}>
			<strong class="title">{size}</strong>
			<small class="prop">var({prop})</small>
		</span>
		{/each}
	</div>
	<div class="container-column scroll">
		{#each Object.entries(containers) as [container, prop]}
		<span class="container" style:--prop={`var(${prop})`}>
			<strong class="title">{container}</strong>
			<small class="prop">var({prop})</small>
		</span>
		{/each}
	</div>
</Divider>

<style>
	@import "../styles/scroll.css";

	.size-grid, .container-column {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 8rem, var(--smallest-container)), 1fr));
		align-items: end;
		gap: var(--x-small) var(--medium);
		inline-size: 100vi;
		padding-inline: calc((100vi - 100%) * 0.5);
		padding-block: 1px;
		margin-inline: calc((100vi - 100%) * -0.5);
		margin-block: var(--3x-large);
	}

	.container-column {
		display: flex;
		flex-flow: column nowrap;
		align-items: start;
		gap: var(--x-small);
	}

	.size, .container {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		gap: 0 var(--x-small);
		line-height: var(--short-line);
		&::after {
			content: "";
			display: block;
			block-size: min(var(--large), var(--larger));
			outline: 1px dashed var(--low-contrast-color);
			border-radius: var(--smallest-radius);
			box-shadow: var(--lightest-box-shadow);
			background-image: linear-gradient(
				var(--accent-300),
				var(--accent-500)
			);
			background-size: var(--prop) 100%;
			margin-block: var(--x-small);
			:global(.semantic.dark) & {
				background-image: linear-gradient(
					var(--accent-400),
					var(--accent-600)
				);
			}
		}
	}

	.size::after {
		inline-size: var(--9x-large);
	}
	
	.container::after {
		inline-size: var(--largest-container);
	}

	.title {
		display: block;
		font-family: var(--display-family);
		font-weight: var(--bold-weight);
		color: var(--medium-contrast-color);
		font-size: var(--medium);
	}

	.prop {
		display: block;
		font-family: var(--mono-family);
		font-weight: var(--regular-weight);
		color: var(--low-contrast-color);
		font-size: var(--small);
	}
</style>