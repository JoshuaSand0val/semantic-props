<script>
    import Divider from "$lib/components/Divider.svelte";
    import Link from "$lib/components/Link.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";

	/** Safe-Area Semantic Props mapped to appropriate CSS `margin`. */
	const safeAreas = {
		"Safe Area Top": {
			prop: "var(--safe-top)",
			demo: "var(--safe-top) 0 0"
		},
		"Safe Area Right": {
			prop: "var(--safe-right)",
			demo: "0 var(--safe-right) 0 0"
		},
		"Safe Area Bottom": {
			prop: "var(--safe-bottom)",
			demo: "0 0 var(--safe-bottom)"
		},
		"Safe Area Left": {
			prop: "var(--safe-left)",
			demo: "0 0 0 var(--safe-top)"
		},
		"Safe Area": {
			prop: "var(--safe)",
			demo: "var(--safe)"
		},
		"Safe Area X-Axis": {
			prop: "var(--safe-x)",
			demo: "var(--safe-x)"
		},
		"Safe Area Y-Axis": {
			prop: "var(--safe-y)",
			demo: "var(--safe-y)"
		},
		"Safe Area Header": {
			prop: "var(--safe-header)",
			demo: "var(--safe-header)"
		},
		"Safe Area Body": {
			prop: "var(--safe-body)",
			demo: "var(--safe-body)"
		},
		"Safe Area Footer": {
			prop: "var(--safe-footer)",
			demo: "var(--safe-footer)"
		}
	};
</script>

<Divider title="Display Safe-Areas" id="safeareas">
	<Paragraph>
		Semantic Props provides CSS values for irregular display safe-areas.
		<Link target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/CSS/env#values">Learn More.</Link><br>
		The following demo modifies the values for presentation purposes.
	</Paragraph>
	<div class="container scroll">
		{#each Object.entries(safeAreas) as [name, values]}
		<article class="demo">
			<div class="display" style:--demo={values.demo}>
				<h4 class="content">{name}</h4>
			</div>
			<span class="prop">{values.prop}</span>
		</article>
		{/each}
	</div>
</Divider>

<style>
	@import "$lib/styles/scroll.css";

	.container {
		--safe-top: var(--medium);
		--safe-right: var(--medium);
		--safe-bottom: var(--medium);
		--safe-left: var(--medium);

		--safe: var(--safe-top) var(--safe-right) var(--safe-bottom) var(--safe-left);
		--safe-x: 0 var(--safe-right) 0 var(--safe-left);
		--safe-y: var(--safe-top) 0 var(--safe-bottom) 0;

		--safe-header: var(--safe-top) var(--safe-right) 0 var(--safe-left);
		--safe-body: var(--safe-x);
		--safe-footer: 0 var(--safe-right) var(--safe-bottom) var(--safe-left);

		display: flex;
		flex-flow: row nowrap;
		justify-content: start;
		padding-inline: calc((100vi - 100%) * 0.5);
		margin-inline: calc((100vi - 100%) * -0.5);
		margin-block: var(--2x-large);
		gap: var(--large);
		scroll-snap-type: inline mandatory;
	}

	.demo {
		display: block;
		text-align: center;
		scroll-snap-align: center;
		flex: 0 0 auto;
	}

	.display {
		--border-color: var(--gray-300);
		--border-size: var(--3x-small);
		position: relative;
		display: block;
		aspect-ratio: var(--portrait-ratio);
		inline-size: min(100%, var(--smaller-container));
		block-size: var(--smallest-container);
		transition: block-size var(--normal-time) var(--ease-out);
		box-shadow: var(--lightest-box-shadow);
		border: var(--4x-small) solid var(--low-contrast-color);
		border-radius: var(--large-radius);
		background-image: repeating-linear-gradient(-45deg,
			var(--border-color) 0 var(--border-size),
			var(--background-color) 0 calc(var(--border-size) * 2)
		);
		overflow: hidden;
		@media (--dark) {
			--border-color: var(--gray-600);
		}
		@media (--phone) {
			block-size: var(--smaller-container);
		}
		@media (--tablet) {
			block-size: var(--small-container);
		}
	}

	.content {
		position: absolute;
		inset: 0;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		font-size: var(--medium);
		font-family: var(--display-family);
		font-weight: var(--regular-weight);
		border-radius: var(--smallest-radius);
		background-color: var(--background-color);
		color: var(--low-contrast-color);
		padding: var(--x-small);
		margin: var(--demo, 0);
		@media (--phone) {
			font-size: var(--large);
		}
	}

	.prop {
		display: block;
		font-family: var(--mono-family);
		margin-block: var(--3x-small);
		color: var(--medium-contrast-color);
		@media (--watch) {
			font-size: var(--small);
		}
	}
</style>