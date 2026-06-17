<script>
    import Code from "$lib/components/Code.svelte";
	import Divider from "$lib/components/Divider.svelte";
    import Link from "$lib/components/Link.svelte";
    import ThemeToggle from "$lib/components/ThemeToggle.svelte";
    import ViewportToggle from "$lib/components/ViewportToggle.svelte";
</script>

<Divider title="Style Queries" id="stylequeries">
	<p class="disclaimer">This feature is unsupported on your browser.</p>
	<p>
		Semantic Props provides customizable theme alongside select viewport <Code lang="CSS" code="style()" /> queries.
		<Link target="_blank" to="https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_style_queries">
		Learn More.
		</Link>
	</p>
	<ThemeToggle />
	<ViewportToggle />
</Divider>

<style>
	.disclaimer {
		display: block;
		color: var(--red-500);
		@container style(--theme) {
			display: none;
		}
	}
</style>