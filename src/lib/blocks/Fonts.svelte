<script lang="ts">
	import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";
    import ReferenceTable from "$lib/components/ReferenceTable.svelte";

	const sizes: Record<string, string> = {
		"Extra Large (9x)": "--9x-large",
		"Extra Large (8x)": "--8x-large",
		"Extra Large (7x)": "--7x-large",
		"Extra Large (6x)": "--6x-large",
		"Extra Large (5x)": "--5x-large",
		"Extra Large (4x)": "--4x-large",
		"Extra Large (3x)": "--3x-large",
		"Extra Large (2x)": "--2x-large",
		"Extra Large": "--x-large",
		"Large": "--large",
		"Medium": "--medium",
		"Small": "--small",
		"Extra Small": "--x-small",

		"Larger": "--larger",
		"Smaller": "--smaller"
	};

	const reference: string[] = [
		"--scale-ratio",
		...Object.values(sizes)
	];
</script>

<Divider title="Font Sizes and Styles" id="fonts">
	<ReferenceTable props={reference} />
	<Paragraph>
		Semantic Props provides a responsive type-scale based on the <code>--scale-ratio</code> prop.<br>
	</Paragraph>
	{#each Object.entries(sizes) as [size, prop]}
	<article class="size-compare" aria-label="Semantic Props font-size comparison.">
		<h4 class="title">{size}</h4>
		<code class="prop">var({prop})</code>
		<span class="size" style:--prop={`var(${prop})`} role="presentation">The quick brown fox jumps over the lazy dog.</span>
	</article>
	{/each}
</Divider>

<style>
	.size-compare {
		display: block;
		margin-block: var(--x-small);
	}

	.title {
		display: block;
		line-height: var(--short-line);
		font-family: var(--body-family);
		color: var(--medium-contrast-color);
		margin: 0;
	}

	.prop {
		display: block;
		line-height: var(--tall-line);
		font-family: var(--mono-family);
		font-size: var(--x-small);
		color: var(--low-contrast-color);
	}

	.size {
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: var(--shortest-line);
		font-family: var(--display-family);
		font-size: var(--prop);
		transition: font-size var(--normal-time) var(--ease-out);
		color: var(--high-contrast-color);
		padding-block: var(--4x-small);
		overflow: hidden;
	}
</style>