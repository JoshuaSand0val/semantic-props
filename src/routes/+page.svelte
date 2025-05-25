<script>
    import AspectRatios from "$lib/blocks/AspectRatios.svelte";
    import BuiltUsing from "$lib/blocks/BuiltUsing.svelte";
    import Colors from "$lib/blocks/Colors.svelte";
    import Intro from "$lib/blocks/Intro.svelte";
    import Content from "$lib/components/Content.svelte";
</script>

<svelte:head>
	<title>Semantic Props: Stylesheets made simple.</title>
</svelte:head>

<Intro />

<Content>
	<BuiltUsing />
	<Colors />
	<AspectRatios />
</Content>