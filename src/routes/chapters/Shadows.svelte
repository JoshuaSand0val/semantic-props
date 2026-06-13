<script lang="ts">
	import Code from "$lib/components/Code.svelte";
    import Divider from "$lib/components/Divider.svelte";

	const textShadow: Record<string, string> = {
		"Light Text Shadow": "var(--light-text-shadow)",
		"Medium Text Shadow": "var(--medium-text-shadow)",
		"Heavy Text Shadow": "var(--heavy-text-shadow)"
	};

	const boxShadow: Record<string, string> = {
		"Light Box Shadow": "var(--light-box-shadow)",
		"Medium Box Shadow": "var(--medium-box-shadow)",
		"Heavy Box Shadow": "var(--heavy-box-shadow)"
	};

	const insetShadow: Record<string, string> = {
		"Light Inset Shadow": "var(--light-inset-shadow)",
		"Medium Inset Shadow": "var(--medium-inset-shadow)",
		"Heavy Inset Shadow": "var(--heavy-inset-shadow)"
	};

	const shadow: Record<string, string> = {
		"Light Shadow": "var(--light-shadow)",
		"Medium Shadow": "var(--medium-shadow)",
		"Heavy Shadow": "var(--heavy-shadow)"
	};
</script>

<Divider title="Shadow Effects" id="shadows">
	<p>Semantic Props provides CSS <Code lang="css" code="text-shadow" />, <Code lang="css" code="box-shadow" /> and <Code lang="css" code="filter" /> shadow effects.</p>
	<div class="container">
		{#each Object.entries({
			text: textShadow,
			box: boxShadow,
			inset: insetShadow,
			filter: shadow
		}) as [type, props]}
		<div class="scroller">
			{#each Object.entries(props) as [title, prop]}
			<span class={`demo ${type}`} style:--prop={prop}>
				<span class="title">{title}</span>
				<code class="prop">{prop}</code>
			</span>
			{/each}
		</div>
		{/each}
	</div>
</Divider>

<style>
	.container { 
		display: block;
		background-color: var(--background-color);
		border: 1px var(--line) var(--foreground-color);
		border-radius: var(--small-radius);
		padding-block: var(--large);
		margin-block: var(--x-large);
		overflow: hidden;
		@container style(--colorway: dark) {
			--background-color: var(--gray-900);
			--middleground-color: var(--gray-800);
			--foreground-color: var(--gray-700);
		}
	}

	.scroller {
		display: flex;
		flex-flow: row nowrap;
		justify-content: start;
		align-items: stretch;
		gap: var(--large);
		padding-inline: var(--medium);
		padding-block: var(--large);
		margin-block: calc(-1 * var(--large));
		scroll-snap-type: inline mandatory;
		overflow: auto;
	}

	.demo {
		display: flex;
		flex-flow: column-reverse nowrap;
		justify-content: space-between;
		aspect-ratio: var(--wide-ratio);
		inline-size: min(100%, var(--small-container));
		scroll-snap-align: start;
		background-color: var(--background-color);
		border: 1px dashed var(--low-contrast-color);
		border-radius: var(--small-radius);
		padding: var(--medium);
		scroll-snap-align: center;
		flex: 1 0 auto;
		&.text {
			text-shadow: var(--prop);
		}
		&.box, &.inset {
			box-shadow: var(--prop);
		}
		&.filter {
			filter: var(--prop);
		}
	}

	.title {
		display: block;
		font-size: var(--2x-large);
		font-family: var(--display-family);
		line-height: var(--short-line);
		color: var(--medium-contrast-color);
		margin-block-start: var(--3x-small);
		@container style(--small-viewport) {
			font-size: var(--3x-large);
		}
	}

	.prop {
		display: block;
		font-size: var(--x-small);
		font-family: var(--mono-family);
		line-height: var(--short-line);
		text-align: end;
		color: var(--low-contrast-color);
		text-shadow: none;
	}
</style>