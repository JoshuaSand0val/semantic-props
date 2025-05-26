<script>
    import AspectRatios from "$lib/blocks/AspectRatios.svelte";
    import BuiltUsing from "$lib/blocks/BuiltUsing.svelte";
    import Colors from "$lib/blocks/Colors.svelte";
    import Intro from "$lib/blocks/Intro.svelte";
    import Reference from "$lib/blocks/Reference.svelte";
    import Sizes from "$lib/blocks/Sizes.svelte";
    import Body from "$lib/components/Body.svelte";
</script>

<svelte:head>
	<title>Semantic Props: Stylesheets made simple.</title>
</svelte:head>

<Intro />

<Body>
	<Reference />
	<BuiltUsing />
	<Colors />
	<Sizes />
	<AspectRatios />
</Body>