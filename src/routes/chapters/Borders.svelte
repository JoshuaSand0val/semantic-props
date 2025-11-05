<script lang="ts">
	import Code from "$lib/components/Code.svelte";
    import Divider from "$lib/components/Divider.svelte";

	const styles: Record<string, string> = {
		"Border Style": "var(--border-style)"
	};

	const radius: Record<string, string> = {
		"Smallest Radius": "var(--smallest-radius)",
		"Smaller Radius": "var(--smaller-radius)",
		"Small Radius": "var(--small-radius)",
		"Medium Radius": "var(--medium-radius)",
		"Large Radius": "var(--large-radius)",
		"Larger Radius": "var(--larger-radius)",
		"Largest Radius": "var(--largest-radius)"
	};
</script>

<Divider title="Border Style and Radius" id="borders">
	<p>Semantic Props provides CSS <Code lang="css" code="border" /> values for style and radius.</p>
	<div class="container">
		{#each Object.entries(styles) as [title, prop]}
		<div class="styles" style:--prop={prop}>
			<span class="title">{title}</span>
			<code class="prop">{prop}</code>
		</div>
		{/each}
		<div class="scroller">
			{#each Object.entries(radius) as [title, prop]}
			<span class="radius" style:--prop={prop}>
				<span class="title">{title}</span>
				<code class="prop">{prop}</code>
			</span>
			{/each}
		</div>
	</div>
</Divider>

<style>
	.container {
		display: block;
		margin-block: var(--3x-large);	
	}

	.scroller {
		display: flex;
		flex-flow: row nowrap;
		gap: var(--x-large);
		scroll-snap-type: inline mandatory;
		overflow: auto;
		margin-block: var(--5x-large);	
	}

	.styles {
		display: flex;
		flex-flow: row wrap;
		align-items: start;
		gap: var(--2x-small);
		padding-block-end: var(--small);
		border-block-end: var(--3x-small) var(--prop) var(--high-contrast-color);
		margin-block: var(--3x-large);
	}

	.radius {
		--inline-size: var(--smallest-container);
		display: flex;
		flex-flow: column nowrap;
		justify-content: end;
		inline-size: min(100%, var(--inline-size));
		aspect-ratio: 1;
		background-color: var(--background-color);
		box-shadow: var(--lighter-box-shadow);
		border: var(--4x-small) var(--border-style) var(--high-contrast-color);
		border-radius: var(--prop);
		padding: var(--medium);
		scroll-snap-align: center;
		flex: 0 0 auto;
		transition: inline-size var(--normal-time) var(--ease-out);
		@media (--laptop) {
			--inline-size: var(--smaller-container);
		}
	}

	.title {
		display: block;
		line-height: var(--shortest-line);
		font-family: var(--display-family);
		font-weight: var(--bold-weight);
		color: var(--medium-contrast-color);
		font-size: var(--large);
	}

	.prop {
		display: block;
		font-family: var(--mono-family);
		font-weight: var(--regular-weight);
		color: var(--low-contrast-color);
		font-size: var(--small);
	}
</style>