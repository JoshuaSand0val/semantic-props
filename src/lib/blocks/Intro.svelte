<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
    import Body from "$lib/components/Body.svelte";
	import Heading from "$lib/components/Heading.svelte";
</script>

<header class="container">
	<div class="wrapper">
		<Body>
			<Heading level={4}>Stylesheets made simple.</Heading>
			<Heading level={1}>
				<span class="title">Semantic Props</span>
			</Heading>
			<Heading level={6}>Expertly crafted CSS Custom Properties (variables) for creating <strong>consistent components</strong> in any design.</Heading>
			<CodeBlock description="Import Script" lang="html" code='<script src="https://unpkg.com/semantic-props"></script>' />
			<CodeBlock description="Scoping Class" lang="html" code='<html class="semantic">...</html>' />
		</Body>
	</div>
</header>

<style>
	strong {
		font-weight: var(--bold-weight);
	}

	.container {
		display: block;
		background-color: var(--primary-color);
		border-block-end: 1px var(--border-style) var(--secondary-color);
		overflow: hidden;
	}

	.wrapper {
		margin-block-start: var(--9x-large);
	}

	.title {
		-webkit-text-stroke: var(--3x-small) transparent;
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
		color: var(--primary-color);
		filter: var(--lightest-shadow);
		animation: title 3s infinite both;
		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}
		:global(.semantic.dark) & {
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