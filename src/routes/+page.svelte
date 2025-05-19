<script>
    import BuiltWith from "$lib/blocks/BuiltWith.svelte";
    import Intro from "$lib/blocks/Intro.svelte";
    import TableOfContents from "$lib/blocks/TableOfContents.svelte";
    import Content from "$lib/components/Content.svelte";
</script>

<svelte:head>
	<title>Semantic Props: Stylesheets made simple.</title>
</svelte:head>

<Intro />

<Content>
	<TableOfContents />
	<BuiltWith />
</Content>