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
			<CodeBlock description="Example Usage" lang="css" code={`
code.semantic.dark {
	display: block;
	tab-size: 4;
	white-space: pre;
	font: var(--small)/var(--short-line) var(--mono-family);
	border-radius: var(--smallest-radius);
	border: 1px var(--border-style) var(--third-body-color);
	border-block-end-width: var(--4x-small);
	background-color: var(--secondary-body-color);
	color: var(--secondary-text-color);
	padding-block: var(--small) var(--x-small);
	padding-inline: var(--x-small) var(--x-large);
	overflow: auto;
}
			`} />
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
		background-image: linear-gradient(231deg, var(--secondary-body-color), var(--primary-body-color));
		border-block-end: 1px var(--border-style) var(--secondary-body-color);
		overflow: hidden;
	}

	.wrapper {
		margin-block-start: var(--9x-large);
	}

	.title {
		-webkit-text-stroke: var(--3x-small) transparent;
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