<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
    import Content from "$lib/components/Content.svelte";
	import Heading from "$lib/components/Heading.svelte";
</script>

<header class="container semantic dark">
	<div class="wrapper">
		<Content>
			<Heading level={4}>Stylesheets made simple.</Heading>
			<Heading level={1}>
				<span class="title">Semantic Props</span>
			</Heading>
			<CodeBlock description="Import At-Rule" lang="css" code='@import "https://unpkg.com/semantic-props";' />
			<CodeBlock description="Scoping Class" lang="html" code='<html class="semantic">...</html>' />
		</Content>
	</div>
</header>

<style>
	.container {
		display: block;
		background-color: var(--primary-body-color);
		background-image: linear-gradient(var(--secondary-body-color), var(--primary-body-color));
		overflow: hidden;
	}

	.wrapper {
		margin-block-start: var(--margin-size);
	}

	.title {
		-webkit-text-stroke: min(0.0625em, 4px) transparent;
		background-image: linear-gradient(123deg,
			var(--primary-red),
			var(--primary-orange),
			var(--primary-yellow),
			var(--primary-green),
			var(--primary-blue),
			var(--primary-indigo),
			var(--primary-violet)
		);
		background-clip: text;
		color: var(--secondary-body-color);
		animation: title 3s infinite both;
		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}
	}

	@keyframes title {
		from {
			filter: hue-rotate(0deg) var(--lightest-shadow);
		}
		to {
			filter: hue-rotate(-360deg) var(--lightest-shadow);
		}
	}
</style>