<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";

	const containers: Record<string, string>= {
		"Smallest Container": "var(--smallest-container)",
		"Smaller Container": "var(--smaller-container)",
		"Small Container": "var(--small-container)",
		"Medium Container": "var(--medium-container)",
		"Large Container": "var(--large-container)",
		"Larger Container": "var(--larger-container)",
		"Largest Container": "var(--largest-container)"
	};

	const sizes: Record<string, string> = {
		"Extra Small (4x)": "var(--4x-small)",
		"Extra Small (3x)": "var(--3x-small)",
		"Extra Small (2x)": "var(--2x-small)",
		"Extra Small": "var(--x-small)",
		"Small": "var(--small)",
		"Medium": "var(--medium)",
		"Large": "var(--large)",
		"Extra Large": "var(--x-large)",
		"Extra Large (2x)": "var(--2x-large)",
		"Extra Large (3x)": "var(--3x-large)",
		"Extra Large (4x)": "var(--4x-large)",
		"Extra Large (5x)": "var(--5x-large)",
		"Extra Large (6x)": "var(--6x-large)",
		"Extra Large (7x)": "var(--7x-large)",
		"Extra Large (8x)": "var(--8x-large)",
		"Extra Large (9x)": "var(--9x-large)",
		
		"Smaller": "var(--smaller)",
		"Larger": "var(--larger)",

		"Margin Size": "var(--margin-size)"
	};
</script>

<Divider title="Containers and Spacing Sizes" id="sizes">
	<p>Semantic Props provides containers alongside sizes.</p>
	<div class="scroller">
		<div class="wrapper">
			{#each Object.entries({ ...sizes, ...containers }) as [title, prop]}
			<div class="demo" style:--prop={prop}>
				<span class="size"></span>
				<span>
					<strong class="title">{title}</strong>
					<small class="prop">{prop}</small>
				</span>
			</div>
			{/each}
		</div>
	</div>
</Divider>

<style>
	.scroller {
		display: block;
		writing-mode: vertical-lr;
		block-size: 100%;
		margin-inline: var(--3x-large);
		scroll-snap-type: block mandatory;
		overflow: auto;
	}

	.wrapper {
		transform: scaleY(-1);
	}

	.demo {
		display: flex;
		flex-flow: row nowrap;
		align-items: start;
		justify-content: start;
		padding: var(--3x-small);
		gap: var(--small);
		scroll-snap-align: start;
	}

	.title, .prop {
		display: block;
		white-space: nowrap;
		flex: 0 1 auto;
		transform: scaleX(-1);
	}

	.title {
		line-height: var(--shorter-line);
		font-family: var(--display-family);
		font-weight: var(--bold-weight);
		color: var(--medium-contrast-color);
		font-size: var(--small);
	}

	.prop {
		font-family: var(--mono-family);
		font-weight: var(--regular-weight);
		color: var(--low-contrast-color);
		font-size: var(--x-small);
	}

	.size {
		display: block;
		inline-size: var(--3x-small);
		padding-block-end: var(--prop);
		outline: 1px dotted var(--medium-contrast-color);
		margin: var(--3x-small);
		flex: 0 0 auto;
	}
</style>