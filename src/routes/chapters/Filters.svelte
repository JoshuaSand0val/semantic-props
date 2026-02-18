<script lang="ts">
	import Code from "$lib/components/Code.svelte";
    import Divider from "$lib/components/Divider.svelte";

	const blur: Record<string, string> = {
		"Lightest Blur": "var(--lightest-blur)",
		"Lighter Blur": "var(--lighter-blur)",
		"Light Blur": "var(--light-blur)",
		"Medium Blur": "var(--medium-blur)",
		"Heavy Blur": "var(--heavy-blur)",
		"Heavier Blur": "var(--heavier-blur)",
		"Heaviest Blur": "var(--heaviest-blur)",
	};

	const brightness: Record<string, string> = {
		"Lowest Brightness": "var(--lowest-brightness)",
		"Lower Brightness": "var(--lower-brightness)",
		"Low Brightness": "var(--low-brightness)",
		"High Brightness": "var(--high-brightness)",
		"Higher Brightness": "var(--higher-brightness)",
		"Highest Brightness": "var(--highest-brightness)"
	};

	const contrast: Record<string, string> = {
		"Lowest Contrast": "var(--lowest-contrast)",
		"Lower Contrast": "var(--lower-contrast)",
		"Low Contrast": "var(--low-contrast)",
		"High Contrast": "var(--high-contrast)",
		"Higher Contrast": "var(--higher-contrast)",
		"Highest Contrast": "var(--highest-contrast)"
	};

	const grayscale: Record<string, string> = {
		"Weakest Grayscale": "var(--weakest-grayscale)",
		"Weaker Grayscale": "var(--weaker-grayscale)",
		"Weak Grayscale": "var(--weak-grayscale)",
		"Medium Grayscale": "var(--medium-grayscale)",
		"Strong Grayscale": "var(--strong-grayscale)",
		"Stronger Grayscale": "var(--stronger-grayscale)",
		"Strongest Grayscale": "var(--strongest-grayscale)"
	};

	const hueRotate: Record<string, string> = {
		"Lowest Hue-Rotate": "var(--lowest-hue-rotate)",
		"Lower Hue-Rotate": "var(--lower-hue-rotate)",
		"Low Hue-Rotate": "var(--low-hue-rotate)",
		"High Hue-Rotate": "var(--high-hue-rotate)",
		"Higher Hue-Rotate": "var(--higher-hue-rotate)",
		"Highest Hue-Rotate": "var(--highest-hue-rotate)"
	};

	const invert: Record<string, string> = {
		"Weakest Invert": "var(--weakest-invert)",
		"Weaker Invert": "var(--weaker-invert)",
		"Weak Invert": "var(--weak-invert)",
		"Medium Invert": "var(--medium-invert)",
		"Strong Invert": "var(--strong-invert)",
		"Stronger Invert": "var(--stronger-invert)",
		"Strongest Invert": "var(--strongest-invert)"
	};

	const opacity: Record<string, string> = {
		"Lowest Opacity": "var(--lowest-opacity)",
		"Lower Opacity": "var(--lower-opacity)",
		"Low Opacity": "var(--low-opacity)",
		"Medium Opacity": "var(--medium-opacity)",
		"High Opacity": "var(--high-opacity)",
		"Higher Opacity": "var(--higher-opacity)",
		"Highest Opacity": "var(--highest-opacity)"
	};

	const saturation: Record<string, string> = {
		"Lowest Saturation": "var(--lowest-saturation)",
		"Lower Saturation": "var(--lower-saturation)",
		"Low Saturation": "var(--low-saturation)",
		"High Saturation": "var(--high-saturation)",
		"Higher Saturation": "var(--higher-saturation)",
		"Highest Saturation": "var(--highest-saturation)"
	};

	const sepia: Record<string, string> = {
		"Weakest Sepia": "var(--weakest-sepia)",
		"Weaker Sepia": "var(--weaker-sepia)",
		"Weak Sepia": "var(--weak-sepia)",
		"Medium Sepia": "var(--medium-sepia)",
		"Strong Sepia": "var(--strong-sepia)",
		"Stronger Sepia": "var(--stronger-sepia)",
		"Strongest Sepia": "var(--strongest-sepia)"
	};
</script>

<Divider title="Filter and Opacity Effects" id="filters">
	<p>Semantic Props provides CSS <Code lang="css" code="filter" /> and <Code lang="css" code="opacity" /> values for various types of media.</p>
	<div class="container">
		{#each [blur, brightness, contrast, grayscale, hueRotate, invert, opacity, saturation, sepia] as filter}
		<article class="wrapper">
			{#each Object.entries(filter) as [title, prop]}			
			<section class="content">
				<span class="demo" style:--prop={prop}>
					<img src="/blocks/Filters/demo.jpg" alt="" />
				</span>
				<h4 class="title">{title}</h4>
				<code class="prop">{prop}</code>
			</section>
			{/each}
		</article>
		{/each}
	</div>
</Divider>

<style>
	.container {
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		gap: var(--2x-large);
		margin-block: var(--3x-large);
	}

	.wrapper {
		display: flex;
		flex-flow: row nowrap;
		gap: inherit;
		scroll-snap-type: inline mandatory;
		overflow: auto;
	}

	.content {
		--inline-size: var(--smallest-container);
		display: block;
		inline-size: min(100%, var(--inline-size));
		transition: inline-size var(--normal-time) var(--ease-out);
		scroll-snap-align: center;
		flex: 0 0 auto;
		@media (--laptop) {
			--inline-size: var(--smaller-container);
		}
	}

	.demo {
		position: relative;
		display: block;
		inline-size: 100%;
		aspect-ratio: var(--square-ratio);
		border-radius: var(--smallest-radius);
		background-color: var(--background-color);
		box-shadow: var(--lightest-box-shadow);
		margin-block-end: var(--2x-small);
		overflow: hidden;
		img {
			display: block;
			inline-size: 100%;
			block-size: 100%;
			object-fit: cover;
			object-position: center;
			transform: var(--large-scale);
			filter: var(--prop);
			opacity: var(--prop);
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
</style>