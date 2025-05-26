<script lang="ts">
	import Divider from "$lib/components/Divider.svelte";
	import Portal from "$lib/components/Portal.svelte";
</script>

<Divider title="Built using Semantic Props" id="builtusing">
	<div class="grid scroll">
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
			url="#builtusing"
		/>
		<Portal
			title="Coming Soon"
			description="Built with Semantic Props."
			url="#builtusing"
		/>
		<Portal
			title="Coming Soon"
			description="Built with Semantic Props."
			url="#builtusing"
		/>
	</div>
</Divider>

<style>
	@import "../styles/scroll.css";

	.grid {
		display: flex;
		flex-flow: row nowrap;
		inline-size: 100vi;
		gap: var(--large);
		scroll-snap-type: x mandatory;
		padding-inline: calc((100vi - 100%) * 0.5);
		padding-block: var(--3x-small);
		margin-inline: calc((100vi - 100%) * -0.5);
		margin-block: var(--2x-large);
		:global(& > *) {
			scroll-snap-align: center;
			inline-size: clamp(var(--smaller-container), 40vi, var(--medium-container));
			flex: 0 0 auto;
		}
	}
</style>