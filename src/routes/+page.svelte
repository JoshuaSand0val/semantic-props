<script>
    import CodeBlock from "$lib/components/CodeBlock.svelte";
	import Divider from "$lib/components/Divider.svelte";
	import Heading from "$lib/components/Heading.svelte";
    import Link from "$lib/components/Link.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";
</script>

<aside class="info">
	<span class="copyright">
		&copy; {new Date().getFullYear()}
		<Link to="https://heyjes.dev/">Joshua Elijah Sandoval.</Link>
	</span>
	<ul class="about">
		<li><Link to="https://github.com/JoshuaSand0val/semantic-props/">Github</Link></li>
		<li class="version">v2.0.0 (MIT)</li>
	</ul>
</aside>

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
		display: flex;
		flex-flow: row wrap;
		align-items: start;
		font-size: var(--small);
		font-family: var(--body-family);
		color: var(--fifth-text-color);
		gap: var(--3x-small);
		overflow: hidden;
	}

	.about {
		display: flex;
		flex-flow: row wrap;
		margin-block: 0;
		margin-inline: auto 0;
		li {
			margin-inline-start: 3ch;
			&:first-child {
				list-style-type: none;
			}
		}
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
		color: var(--secondary-body-color);
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