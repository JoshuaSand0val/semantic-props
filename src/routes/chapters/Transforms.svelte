<script lang="ts">
	import Code from "$lib/components/Code.svelte";
    import Divider from "$lib/components/Divider.svelte";

	const scaleX: Record<string, string> = {
		"Smallest Scale-X": "var(--smallest-scale-x)",
		"Smaller Scale-X": "var(--smaller-scale-x)",
		"Small Scale-X": "var(--small-scale-x)",
		"Large Scale-X": "var(--large-scale-x)",
		"Larger Scale-X": "var(--larger-scale-x)",
		"Largest Scale-X": "var(--largest-scale-x)"
	};

	const scaleY: Record<string, string> = {
		"Smallest Scale-Y": "var(--smallest-scale-y)",
		"Smaller Scale-Y": "var(--smaller-scale-y)",
		"Small Scale-Y": "var(--small-scale-y)",
		"Large Scale-Y": "var(--large-scale-y)",
		"Larger Scale-Y": "var(--larger-scale-y)",
		"Largest Scale-Y": "var(--largest-scale-y)"
	};

	const scale: Record<string, string> = {
		"Smallest Scale": "var(--smallest-scale)",
		"Smaller Scale": "var(--smaller-scale)",
		"Small Scale": "var(--small-scale)",
		"Large Scale": "var(--large-scale)",
		"Larger Scale": "var(--larger-scale)",
		"Largest Scale": "var(--largest-scale)"
	};
</script>

<Divider title="Transform Effects" id="transforms">
	<p>Semantic Props provides CSS <Code lang="css" code="transform" /> values for scale.</p>
	{#each [scaleX, scaleY, scale] as transform}
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
		filter: var(--lightest-shadow);
	}

	.card {
		--inline-size: var(--smaller-container);
		display: block;
		inline-size: min(100%, var(--inline-size));
		transition: inline-size var(--normal-time) var(--ease-out);
		padding: var(--medium);
		background-color: var(--background-color);
		border: 1px var(--border-style) var(--foreground-color);
		border-radius: var(--smallest-radius);
		flex: 0 0 auto;
		scroll-snap-align: center;
		@media (--laptop) {
			--inline-size: var(--small-container);
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

	.demo, .transform, .box {
		display: block;
		aspect-ratio: 1;
	}

	.demo {
		position: relative;
		border: var(--4x-small) dashed var(--low-contrast-color);
		margin-inline: var(--2x-large);
		margin-block: var(--5x-large);
		filter: var(--light-shadow);
	}

	.transform {
		transform: var(--prop);
		transform-origin: center;
		transform-style: preserve-3d;
	}

	.box {
		position: absolute;
		inset: 0;
		transform: translateZ(calc(var(--smallest-container) * -1));
		outline: var(--4x-small) solid var(--high-contrast-color);
	}
</style>