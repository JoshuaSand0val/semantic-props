<script lang="ts">
	import Content from "$lib/components/Content.svelte";
	import Divider from "$lib/components/Divider.svelte";
	import Portal from "$lib/components/Portal.svelte";
</script>

<Divider title="Built using Semantic Props">
	<div class="grid" id="builtwith">
		<Portal
			title="Hey, Jes!"
			description="Portfolio website by Jess Sandoval."
			url="https://heyjes.dev/"
			image="built-with/heyjesdev.png"
			imageDark="built-with/heyjesdev-dark.png"
		/>
		<Portal
			title="Coming Soon"
			description="Built with Semantic Props."
			url="#builtwith"
		/>
		<Portal
			title="Coming Soon"
			description="Built with Semantic Props."
			url="#builtwith"
		/>
	</div>
</Divider>

<style>
	.grid {
		display: flex;
		flex-flow: row nowrap;
		inline-size: 100vi;
		gap: var(--small);
		scroll-snap-type: x mandatory;
		padding-inline: calc((100vi - 100%) * 0.5);
		margin-inline: calc((100vi - 100%) * -0.5);
		margin-block: var(--2x-large);
		overflow: auto;
		:global(& > *) {
			scroll-snap-align: center;
			inline-size: min(100%, var(--small-container));
			flex: 0 0 auto;
		}
	}
</style>