<script>
    import Code from "$lib/components/Code.svelte";
	import Divider from "$lib/components/Divider.svelte";
    import Link from "$lib/components/Link.svelte";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
</script>

<Divider title="Style Queries" id="stylequeries">
	<p>
		Semantic Props provides customizable theme alongside select viewport <Code lang="CSS" code="style()" /> queries.
		<Link target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries">
		Learn More.
		</Link>
	</p>
	<ThemeToggle />
</Divider>