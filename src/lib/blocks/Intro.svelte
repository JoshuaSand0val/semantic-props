<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
    import Content from "$lib/components/Content.svelte";
	import Heading from "$lib/components/Heading.svelte";
</script>

<header class="container">
	<div class="wrapper">
		<Content>
			<Heading level={4}>Stylesheets made simple.</Heading>
			<Heading level={1}>
				<span class="title">Semantic Props</span>
			</Heading>
			<Heading level={6}>Expertly crafted CSS Custom Properties (variables) for creating <strong>consistent components</strong> in any design.</Heading>
			<CodeBlock description="Import At-Rule" lang="css" code='@import "https://unpkg.com/semantic-props";' />
			<CodeBlock description="Scoping Class" lang="html" code='<html class="semantic">...</html>' />
		</Content>
	</div>
</header>

<style>
	strong {
		font-weight: var(--bold-weight);
	}

	.container {
		display: block;
		background-color: var(--primary-body-color);
		background-image: linear-gradient(123deg, var(--secondary-body-color), var(--primary-body-color) 50%);
		border-block-end: 1px var(--border-style) var(--secondary-body-color);
		overflow: hidden;
	}

	.wrapper {
		margin-block-start: var(--9x-large);
	}

	.title {
		-webkit-text-stroke: var(--3x-small) transparent;
		background-image: linear-gradient(123deg,
			var(--light, var(--red-500)) var(--dark, var(--red-400)),
			var(--light, var(--orange-500)) var(--dark, var(--orange-400)),
			var(--light, var(--yellow-500)) var(--dark, var(--yellow-400)),
			var(--light, var(--green-500)) var(--dark, var(--green-400)),
			var(--light, var(--blue-500)) var(--dark, var(--blue-400)),
			var(--light, var(--indigo-500)) var(--dark, var(--indigo-400)),
			var(--light, var(--violet-500)) var(--dark, var(--violet-400))
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