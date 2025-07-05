<script lang="ts">
    import ColorPalette from "$lib/components/ColorPalette.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";
</script>

<Divider title="Color Palette" id="colors">
	<Paragraph>
		Semantic Props provides a simple but expansive color palette.
	</Paragraph>
	<ColorPalette />
</Divider>