<script>
    import Nav from "$lib/components/Nav.svelte";

    import AspectRatios from "./chapters/AspectRatios.svelte";
    import Borders from "./chapters/Borders.svelte";
    import BuiltUsing from "./chapters/BuiltUsing.svelte";
    import Colors from "./chapters/Colors.svelte";
    import Filters from "./chapters/Filters.svelte";
    import Fonts from "./chapters/Fonts.svelte";
    import Intro from "./chapters/Intro.svelte";
    import SafeAreas from "./chapters/SafeAreas.svelte";
    import Sizes from "./chapters/Sizes.svelte";
	import Timing from "./chapters/Timing.svelte";
</script>

<svelte:head>
	<title>Semantic Props: Stylesheet values made simple.</title>
</svelte:head>

<Nav chapters={{
	"#intro": "Introduction to Semantic Props",
	"#builtusing": "Built using Semantic Props",
	"#borders": "Border Style and Radius",
	"#colors": "Color Palette",
	"#filters": "Filter and Opacity Effects",
	"#fonts": "Font Sizes and Styles",
	"#aspectratios": "Aspect Ratios",
	"#safeareas": "Display Safe-Areas",
	"#sizes": "Containers and Spacing Sizes",
	"#timing": "Animation Timing and Easing"
}} />

<Intro />
<BuiltUsing />
<Borders />
<Colors />
<Filters />
<Fonts />
<AspectRatios />
<SafeAreas />
<Sizes />
<Timing />