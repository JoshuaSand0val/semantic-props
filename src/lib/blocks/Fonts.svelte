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

	const families: Record<string, string> = {
		"Body Family": "--body-family",
		"Display Family": "--display-family",
		"Monospace Family": "--mono-family",
		"Accent Family": "--accent-family"
	};

	const weights: Record<string, string> = {
		"Thin": "--thin-weight",
		"Light": "--light-weight",
		"Regular": "--regular-weight",
		"Bold": "--bold-weight",
		"Heavy": "--heavy-weight"
	};

	const letterSpacing: Record<string, string> = {
		"Densest Letter Spacing": "--densest-letter",
		"Denser Letter Spacing": "--denser-letter",
		"Dense Letter Spacing": "--dense-letter",
		"Normal Letter Spacing": "--normal-letter",
		"Wide Letter Spacing": "--wide-letter",
		"Wider Letter Spacing": "--wider-letter",
		"Widest Letter Spacing": "--widest-letter"
	};

	const lineHeight: Record<string, string> = {
		"Shortest Line Height": "--shortest-line",
		"Shorter Line Height": "--shorter-line",
		"Short Line Height": "--short-line",
		"Normal Line Height": "--normal-line",
		"Tall Line Height": "--tall-line",
		"Taller Line Height": "--taller-line",
		"Tallest Line Height": "--tallest-line"	
	};

	const wordSpacing: Record<string, string> = {
		"Densest Word Spacing": "--densest-word",
		"Denser Word Spacing": "--denser-word",
		"Dense Word Spacing": "--dense-word",
		"Normal Word Spacing": "--normal-word",
		"Wide Word Spacing": "--wide-word",
		"Wider Word Spacing": "--wider-word",
		"Widest Word Spacing": "--widest-word"
	};

	const reference: string[] = [
		"--scale-ratio",
		...Object.values({
			...sizes,
			...families,
			...weights,
			...letterSpacing,
			...lineHeight,
			...wordSpacing
		})
	];
</script>

<Divider title="Font Sizes and Styles" id="fonts">
	<ReferenceTable props={reference} />
	<Paragraph>
		Semantic Props provides a responsive type-scale based on the <code>--scale-ratio</code> prop.
	</Paragraph>
	<div class="container sizes">
		{#each Object.entries(sizes) as [size, prop]}
		<article>
			<h4 class="title">{size}</h4>
			<code class="prop">var({prop})</code>
			<span class="demo" style:--prop={`var(${prop})`} role="presentation">The quick brown fox jumps over the lazy dog.</span>
		</article>
		{/each}
	</div>
	<Paragraph>
		Semantic Props provides values for styling fonts in various situations.
	</Paragraph>
	<div class="container families">
		{#each Object.entries(families) as [family, prop]}
		<article>
			<h4 class="title">{family}</h4>
			<code class="prop">var({prop})</code>
			<div class="demo" style:--prop={`var(${prop})`} role="presentation" aria-label="English Alphabet">
				{#each "abcdefghijklmnopqrstuvwxyz".split("") as letter}
				<span>{letter.toUpperCase()}{letter}</span>
				{/each}
			</div>
		</article>
		{/each}
	</div>
</Divider>

<style>
	.container {
		display: block;
		line-height: var(--normal-line);
		margin-block: var(--large);
	}

	.container.families {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, var(--small-container)), 1fr));
		gap: var(--large) var(--3x-large);
	}

	.title {
		display: block;
		font-family: var(--body-family);
		color: var(--medium-contrast-color);
		margin: 0;
	}

	.prop {
		display: block;
		font-family: var(--mono-family);
		font-size: var(--small);
		color: var(--low-contrast-color);
	}

	.sizes .demo {
		display: block;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: var(--shortest-line);
		font-family: var(--display-family);
		font-size: var(--prop);
		font-weight: var(--regular-weight);
		transition: font-size var(--normal-time) var(--ease-out);
		color: var(--high-contrast-color);
		padding-block: var(--4x-small);
		margin-block: var(--2x-small);
		overflow: hidden;
	}

	.families .demo {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(2em, 1fr));
		grid-auto-rows: minmax(2em, 1fr);
		gap: var(--small);
		font-family: var(--prop);
		line-height: 2em;
		margin-block-start: var(--small);
	}
</style>