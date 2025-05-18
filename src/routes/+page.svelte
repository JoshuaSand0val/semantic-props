<script>
    import CodeBlock from "$lib/components/CodeBlock.svelte";
	import Heading from "$lib/components/Heading.svelte";
</script>

<Heading level={4}>Stylesheets made simple.</Heading>
<Heading level={1}>
	<span class="title">Semantic Props</span>
</Heading>
<CodeBlock description="Import At-Rule" lang="css" code='@import "https://unpkg.com/semantic-props";' />
<CodeBlock description="Scoping Class" lang="html" code='<html class="semantic">...</html>' />

<style>
	.title {
		background-image: linear-gradient(132deg, var(--primary-cyan), var(--third-blue));
		background-clip: text;
		color: transparent;
	}
</style>