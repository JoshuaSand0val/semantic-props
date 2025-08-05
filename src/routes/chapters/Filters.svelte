<script lang="ts">
    import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";

	const blur: Record<string, string> = {
		"Lightest Blur": "--lightest-blur",
		"Lighter Blur": "--lighter-blur",
		"Light Blur": "--light-blur",
		"Medium Blur": "--medium-blur",
		"Heavy Blur": "--heavy-blur",
		"Heavier Blur": "--heavier-blur",
		"Heaviest Blur": "--heaviest-blur",
	};

	const brightness: Record<string, string> = {
		"Lowest Brightness": "--lowest-brightness",
		"Lower Brightness": "--lower-brightness",
		"Low Brightness": "--low-brightness",
		"High Brightness": "--high-brightness",
		"Higher Brightness": "--higher-brightness",
		"Highest Brightness": "--highest-brightness"
	};

	const contrast: Record<string, string> = {
		"Lowest Contrast": "--lowest-contrast",
		"Lower Contrast": "--lower-contrast",
		"Low Contrast": "--low-contrast",
		"High Contrast": "--high-contrast",
		"Higher Contrast": "--higher-contrast",
		"Highest Contrast": "--highest-contrast"
	};

	const saturation: Record<string, string> = {
		"Lowest Saturation": "--lowest-saturation",
		"Lower Saturation": "--lower-saturation",
		"Low Saturation": "--low-saturation",
		"High Saturation": "--high-saturation",
		"Higher Saturation": "--higher-saturation",
		"Highest Saturation": "--highest-saturation"
	};
</script>

<Divider title="Filter Effects" id="filters">
	<Paragraph>Semantic Props provides CSS <code>filter</code> values for various types of media.</Paragraph>
	<div class="container">
		{#each [blur, brightness, contrast, saturation] as filter}
		<article class="wrapper">
			{#each Object.entries(filter) as [title, prop]}			
			<section class="content">
				<span class="demo" style:--prop={`var(${prop})`}>
					<img src="/blocks/Filters/demo.jpg" alt="" />
				</span>
				<h4 class="title">{title}</h4>
				<code class="prop">var({prop})</code>
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