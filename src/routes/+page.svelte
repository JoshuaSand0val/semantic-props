<script>
    import Content from "$lib/components/Content.svelte";
	import Display from "$lib/components/Display.svelte";
    import Link from "$lib/components/Link.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";
</script>

<Content>
	<Display level="title">Welcome to SvelteKit</Display>
	<Paragraph>Visit <Link to="https://svelte.dev/docs/kit">svelte.dev/docs/kit</Link> to read the documentation</Paragraph>
</Content>