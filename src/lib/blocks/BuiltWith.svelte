<script lang="ts">
	import Divider from "$lib/components/Divider.svelte";
    import Paragraph from "$lib/components/Paragraph.svelte";
	import Portal from "$lib/components/Portal.svelte";
</script>

<Divider title="Built using Semantic Props" />
<Paragraph>A curation of designs created using Semantic Props.</Paragraph>

<div class="grid">
	<Portal
		title="Hey, Jes!"
		description="Portfolio website by Jess Sandoval."
		url="https://heyjes.dev/"
		image="built-with/heyjesdev.png"
		imageDark="built-with/heyjesdev-dark.png"
	/>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(var(--small-container), 1fr));
		gap: var(--small);
		margin-block: var(--2x-large);
	}
</style>