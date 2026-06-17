<script lang="ts">
	import Code from "$lib/components/Code.svelte";
    import Divider from "$lib/components/Divider.svelte";

	const blur: Record<string, string> = {
		"Light Blur": "var(--light-blur)",
		"Medium Blur": "var(--medium-blur)",
		"Heavy Blur": "var(--heavy-blur)"
	};

	const brightness: Record<string, string> = {
		"Low Brightness": "var(--low-brightness)",
		"High Brightness": "var(--high-brightness)"
	};

	const contrast: Record<string, string> = {
		"Low Contrast": "var(--low-contrast)",
		"High Contrast": "var(--high-contrast)"
	};

	const grayscale: Record<string, string> = {
		"Weak Grayscale": "var(--weak-grayscale)",
		"Medium Grayscale": "var(--medium-grayscale)",
		"Strong Grayscale": "var(--strong-grayscale)"
	};

	const hueRotate: Record<string, string> = {
		"Low Hue-Rotate": "var(--low-hue-rotate)",
		"High Hue-Rotate": "var(--high-hue-rotate)"
	};

	const invert: Record<string, string> = {
		"Weak Invert": "var(--weak-invert)",
		"Medium Invert": "var(--medium-invert)",
		"Strong Invert": "var(--strong-invert)"
	};

	const opacity: Record<string, string> = {
		"Low Opacity": "var(--low-opacity)",
		"Medium Opacity": "var(--medium-opacity)",
		"High Opacity": "var(--high-opacity)"
	};

	const saturation: Record<string, string> = {
		"Low Saturation": "var(--low-saturation)",
		"High Saturation": "var(--high-saturation)"
	};

	const sepia: Record<string, string> = {
		"Weak Sepia": "var(--weak-sepia)",
		"Medium Sepia": "var(--medium-sepia)",
		"Strong Sepia": "var(--strong-sepia)"
	};
</script>

<Divider title="Filter and Opacity Effects" id="filters">
	<p>Semantic Props provides CSS <Code lang="css" code="filter" /> and <Code lang="css" code="opacity" /> values for various types of media.</p>
	<article class="container">
		{#each [blur, brightness, contrast, grayscale, hueRotate, invert, opacity, saturation, sepia] as filter}
			{#each Object.entries(filter) as [title, prop]}			
			<section class="content">
				<span class="demo" style:--prop={prop}>
					<img src="/blocks/Filters/demo.webp" alt="" />
				</span>
				<h4 class="title">{title}</h4>
				<code class="prop">{prop}</code>
			</section>
			{/each}
		{/each}
	</article>
</Divider>

<style>
	.container {
		position: relative;
		display: flex;
		flex-flow: row nowrap;
		gap: var(--2x-large);
		margin-block: var(--3x-large);
		scroll-snap-type: inline mandatory;
		overflow: auto;
	}

	.content {
		--inline-size: var(--2x-small-container);
		display: block;
		inline-size: min(100%, var(--inline-size));
		transition: inline-size var(--normal-time) var(--ease-out);
		scroll-snap-align: center;
		flex: 0 0 auto;
		@media (--medium-viewport) {
			--inline-size: var(--x-small-container);
		}
	}

	.demo {
		position: relative;
		display: block;
		inline-size: 100%;
		aspect-ratio: var(--square-ratio);
		border-radius: var(--small-radius);
		border: 1px var(--line) var(--foreground-color);
		background-color: var(--background-color);
		box-shadow: var(--light-box-shadow);
		margin-block-end: var(--2x-small);
		overflow: hidden;
		img {
			display: block;
			inline-size: 100%;
			block-size: 100%;
			object-fit: cover;
			object-position: center;
			scale: var(--large-scale);
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