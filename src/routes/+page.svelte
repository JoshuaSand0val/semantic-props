<script>
    import BuiltWith from "$lib/blocks/BuiltWith.svelte";
    import TableOfContents from "$lib/blocks/TableOfContents.svelte";
    import CodeBlock from "$lib/components/CodeBlock.svelte";
	import Heading from "$lib/components/Heading.svelte";
</script>


<Heading level={4}>Stylesheets made simple.</Heading>
<Heading level={1}>
	<span class="title">Semantic Props</span>
</Heading>
<CodeBlock description="Import At-Rule" lang="css" code='@import "https://unpkg.com/semantic-props";' />
<CodeBlock description="Scoping Class" lang="html" code='<html class="semantic">...</html>' />

<TableOfContents />
<BuiltWith />

<style>
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