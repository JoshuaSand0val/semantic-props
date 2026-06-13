<script lang="ts">
	import Code from "$lib/components/Code.svelte";
    import Divider from "$lib/components/Divider.svelte";

	const scale: Record<string, string> = {
		"Small Scale": "var(--small-scale)",
		"Large Scale": "var(--large-scale)"
	};
</script>

<Divider title="Transform Effects" id="transforms">
	<p>Semantic Props provides CSS <Code lang="css" code="scale" /> values.</p>
	{#each [scale] as transform}
	<div class="container">
		{#each Object.entries(transform) as [title, prop]}
		<span class="card" style:--prop={prop}>
			<span class="title">{title}</span>
			<code class="prop">{prop}</code>
			<div class="demo">
				<div class="transform">
					<div class="box"></div>
				</div>
			</div>
		</span>
		{/each}
	</div>
	{/each}
</Divider>

<style>
	.container {
		display: flex;
		flex-flow: row nowrap;
		gap: var(--large);
		scroll-snap-type: inline mandatory;
		overflow: auto;
		margin-block: var(--3x-large);
		filter: var(--light-shadow);
	}

	.card {
		--inline-size: var(--x-small-container);
		display: block;
		inline-size: min(100%, var(--inline-size));
		transition: inline-size var(--normal-time) var(--ease-out);
		padding: var(--medium);
		background-color: var(--background-color);
		border: 1px var(--line) var(--foreground-color);
		border-radius: var(--small-radius);
		flex: 0 0 auto;
		scroll-snap-align: center;
		@container style(--medium-viewport) {
			--inline-size: var(--small-container);
		}
	}

	.title {
		display: block;
		line-height: var(--short-line);
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

	.demo, .transform, .box {
		display: block;
		aspect-ratio: 1;
	}

	.demo {
		position: relative;
		border: 2px dashed var(--low-contrast-color);
		margin: var(--5x-large);
		filter: var(--light-shadow);
	}

	.transform {
		scale: var(--prop);
		transform-origin: center;
		transform-style: preserve-3d;
	}

	.box {
		position: absolute;
		inset: 0;
		transform: translateZ(calc(var(--smallest-container) * -1));
		outline: 2px solid var(--high-contrast-color);
	}
</style>