<script lang="ts">
	import Divider from "$lib/components/Divider.svelte";

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
		"Thin Weight": "--thin-weight",
		"Light Weight": "--light-weight",
		"Regular Weight": "--regular-weight",
		"Bold Weight": "--bold-weight",
		"Heavy Weight": "--heavy-weight"
	};

	const letterSpacing: Record<string, string> = {
		"Tightest Letter Spacing": "--tightest-letter",
		"Tighter Letter Spacing": "--tighter-letter",
		"Tight Letter Spacing": "--tight-letter",
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
		"Tightest Word Spacing": "--tightest-word",
		"Tighter Word Spacing": "--tighter-word",
		"Tight Word Spacing": "--tight-word",
		"Normal Word Spacing": "--normal-word",
		"Wide Word Spacing": "--wide-word",
		"Wider Word Spacing": "--wider-word",
		"Widest Word Spacing": "--widest-word"
	};
</script>

<Divider title="Font Sizes and Styles" id="fonts">
	<p>Semantic Props provides various values for styling fonts.</p>
	<div class="container sizes">
		{#each Object.entries(sizes) as [size, prop]}
		<article>
			<h4 class="title">{size}</h4>
			<code class="prop">var({prop})</code>
			<span class="demo" style:--prop={`var(${prop})`} role="presentation">The quick brown fox jumps over the lazy dog.</span>
		</article>
		{/each}
	</div>
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
	<div class="container weights">
		{#each Object.entries(weights) as [weight, prop]}
		<article>
			<h4 class="title">
				<span class="demo" style:--prop={`var(${prop})`}>
					{weight.toUpperCase()}
				</span>
			</h4>
			<code class="prop">var({prop})</code>
		</article>
		{/each}
	</div>
	<div class="container letter-spacing">
		{#each Object.entries(letterSpacing) as [spacing, prop]}
		<article>
			<h4 class="title">
				<span class="demo" style:--prop={`var(${prop})`}>
					{spacing.toUpperCase()}
				</span>
			</h4>
			<code class="prop">var({prop})</code>
		</article>
		{/each}
	</div>
	<div class="container line-height">
		{#each Object.entries(lineHeight) as [height, prop]}
		<article>
			<h4 class="title">
				<span class="demo" style:--prop={`var(${prop})`}>
					{height.toUpperCase()}
				</span>
			</h4>
			<code class="prop">var({prop})</code>
		</article>
		{/each}
	</div>
	<div class="container word-spacing">
		{#each Object.entries(wordSpacing) as [spacing, prop]}
		<article>
			<h4 class="title">
				<span class="demo" style:--prop={`var(${prop})`}>
					{spacing.toUpperCase()}
				</span>
			</h4>
			<code class="prop">var({prop})</code>
		</article>
		{/each}
	</div>
</Divider>

<style>
	.container {
		display: block;
		line-height: var(--normal-line);
		margin-block: var(--x-large);
		& + & {
			margin-block-start: var(--5x-large);
		}
	}

	.container:is(.families, .weights, .letter-spacing, .line-height, .word-spacing) {
		--column-width: var(--smallest-container);
		display: flex;
		flex-flow: row nowrap;
		gap: var(--large) var(--3x-large);
		scroll-snap-type: inline mandatory;
		overflow: auto;
		@media (--phone) {
			--column-width: var(--smaller-container);
		}
		@media (--desktop) {
			--column-width: var(--small-container);
		}
		:global(& > *) {
			transition: flex-basis var(--normal-time) var(--ease-out);
			flex: 0 0 min(100%, var(--column-width));
			scroll-snap-align: center;
		}
	}

	.title {
		display: block;
		font-family: var(--body-family);
		font-weight: var(--bold-weight);
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
		gap: var(--2x-small);
		font-family: var(--prop);
		line-height: 2em;
		margin-block-start: var(--small);
	}

	.weights .demo {
		display: block;
		justify-content: start;
		font-size: var(--3x-large);
		font-weight: var(--prop);
		font-family: var(--display-family);
		line-height: var(--shorter-line);
		color: var(--high-contrast-color);
	}

	:is(.letter-spacing, .word-spacing) .demo {
		display: block;
		font-size: var(--x-large);
		font-weight: var(--light-weight);
		font-family: var(--display-family);
		line-height: var(--short-line);
		letter-spacing: var(--prop);
		color: var(--high-contrast-color);
	}

	.line-height .demo {
		display: block;
		font-size: var(--large);
		font-weight: var(--regular-weight);
		font-family: var(--body-family);
		line-height: var(--prop);
		text-align: center;
		white-space: nowrap;
		text-overflow: clip;
		border-block: 1px solid var(--high-contrast-color);
		color: var(--medium-contrast-color);
		overflow: hidden;
		margin-block-end: var(--3x-small);
	}

	.word-spacing .demo {
		word-spacing: var(--prop);
		letter-spacing: revert;
	}
</style>