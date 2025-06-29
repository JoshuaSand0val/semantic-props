<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
    import Divider from "$lib/components/Divider.svelte";
	import Heading from "$lib/components/Heading.svelte";
</script>

<header class="container">
	<Divider title="Introduction to Semantic Props" id="intro">
		<Heading level={4}>Stylesheets made simple.</Heading>
		<Heading level={1}>
			<span class="title">Semantic Props</span>
		</Heading>
		<Heading level={6}>Expertly crafted CSS Custom Properties (variables) for creating <strong>consistent components</strong> in any design.</Heading>
		<CodeBlock description="Import At-Rule" lang="css" code='@import "https://unpkg.com/semantic-props";' />
	</Divider>
</header>

<style>
	strong {
		font-weight: var(--bold-weight);
	}

	.container {
		display: block;
		transition: margin-block-start var(--faster-time) var(--ease-in);
		margin-block-start: var(--8x-large);
		@media (--phone) {
			margin-block-start: var(--6x-large);
		}
		@media (--tablet) {
			margin-block-start: var(--8x-large);
		}
	}

	.title {
		-webkit-text-stroke: var(--4x-small) transparent;
		background-image: linear-gradient(123deg,
			var(--red-600),
			var(--orange-600),
			var(--yellow-600),
			var(--green-600),
			var(--blue-600),
			var(--indigo-600),
			var(--violet-600)
		);
		background-clip: text;
		color: var(--background-color);
		filter: var(--lightest-shadow);
		animation: title 3s infinite both;
		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}
		@media (--dark) {
			background-image: linear-gradient(123deg,
				var(--red-300),
				var(--orange-300),
				var(--yellow-300),
				var(--green-300),
				var(--blue-300),
				var(--indigo-300),
				var(--violet-300)
			);	
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