<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
	import Heading from "$lib/components/Heading.svelte";
</script>

<header class="container" id="intro">
	<Heading level={4}>
		<span class="slogan">Stylesheet values made simple.</span>
	</Heading>
	<Heading level={1}>
		<span class="title">Semantic Props</span>
	</Heading>
	<Heading level={6}>
		<span class="subtitle">
			<span style:--phrase={1}>Expertly crafted CSS</span>
			<span style:--phrase={2}>Custom Properties (variables)</span>
			<span style:--phrase={3}>for creating</span>
			<span style:--phrase={4}><strong>consistent components</strong></span>
			<span style:--phrase={5}>in any design.</span>
		</span>
	</Heading>
	<CodeBlock description="Import At-Rule" lang="css" code='@import "https://cdn.jsdelivr.net/npm/semantic-props@2.1.0";' />
	<CodeBlock description="NPM Install Command" lang="shell" code='npm install semantic-props' />
</header>

<style>
	strong {
		font-weight: var(--bold-weight);
	}

	.container {
		display: block;
		transition: margin-block-start var(--fast-time) var(--ease-in);
		margin-block-start: var(--4x-large);
		@media (--small-viewport) {
			margin-block-start: var(--5x-large);
		}
		@media (--medium-viewport) {
			margin-block-start: var(--6x-large);
		}
	}

	.slogan {
		display: block;
		@media not (prefers-reduced-motion: reduce) {
			animation: slogan-fade-in var(--slow-time) var(--slow-time) both;
		}
	}

	@keyframes slogan-fade-in {
		from {
			opacity: 0;
		}
	}

	.title {
		display: block;
		text-shadow: var(--light-text-shadow);
		@media not (prefers-reduced-motion: reduce) {
			animation: title-scale-in var(--slow-time);
			transform-origin: top left;
		}
	}

	@keyframes title-scale-in {
		from {
			scale: var(--small-scale);
		}
	}

	.subtitle span {
		display: inline-block;
		animation-name: subtitle-fade-in;
		animation-duration: var(--slow-time);
		animation-delay: calc(var(--slow-time) * (var(--phrase) - 1));
		animation-fill-mode: both;
		transform-origin: bottom left;
		@media (prefers-reduced-motion) {
			animation: none;
		}
	}

	@keyframes subtitle-fade-in {
		from {
			scale: var(--large-scale);
			filter: var(--light-blur) var(--heavy-shadow);
			opacity: 0;
		}
	}
</style>