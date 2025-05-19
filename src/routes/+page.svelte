<script>
    import BuiltWith from "$lib/blocks/BuiltWith.svelte";
    import Intro from "$lib/blocks/Intro.svelte";
    import TableOfContents from "$lib/blocks/TableOfContents.svelte";
    import Content from "$lib/components/Content.svelte";
</script>

<Intro />

<Content>
	<TableOfContents />
	<BuiltWith />
</Content>