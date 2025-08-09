<script lang="ts">
	import CodeBlock from "$lib/components/CodeBlock.svelte";
    import Divider from "$lib/components/Divider.svelte";
	import Heading from "$lib/components/Heading.svelte";
</script>

<header class="container">
	<Divider title="Introduction to Semantic Props" id="intro">
		<Heading level={4}>Stylesheet values made simple.</Heading>
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
		margin-block-start: var(--4x-large);
		@media (--phone) {
			margin-block-start: var(--5x-large);
		}
		@media (--tablet) {
			margin-block-start: var(--6x-large);
		}
	}

	.title {
		filter: var(--lightest-shadow);
	}
</style>