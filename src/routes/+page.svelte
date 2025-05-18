<script>
    import CodeBlock from "$lib/components/CodeBlock.svelte";
	import Divider from "$lib/components/Divider.svelte";
	import Heading from "$lib/components/Heading.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";
</script>

<div class="info">
	<small class="copyright">&copy; {new Date().getFullYear()} Joshua Elijah Sandoval.</small>
	<small class="version">v2.0.0 (MIT)</small>
</div>

<Heading level={4}>Stylesheets made simple.</Heading>
<Heading level={1}>
	<span class="title">Semantic Props</span>
</Heading>
<CodeBlock description="Import At-Rule" lang="css" code='@import "https://unpkg.com/semantic-props";' />
<CodeBlock description="Scoping Class" lang="html" code='<html class="semantic">...</html>' />

<Divider title="Built using Semantic Props" />
<Paragraph>A curation of designs created using Semantic Props.</Paragraph>

<Divider title="Semantic Props" />
...

<style>
	.info {
		overflow: hidden;
	}

	.copyright, .version {
		display: block;
		font-size: var(--small);
		font-family: var(--body-family);
		color: var(--fifth-text-color);
		float: left;
	}

	.version {
		float: right;
	}

	.title {
		-webkit-text-stroke: 3px transparent;
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
		color: var(--secondary-white);
		animation: title 3s infinite both;
		@media (prefers-reduced-motion: reduce) {
			animation: none;
		}
	}

	@keyframes title {
		from {
			filter: hue-rotate(0deg)var(--lightest-shadow);
		}
		to {
			filter: hue-rotate(-360deg) var(--lightest-shadow);
		}
	}
</style>