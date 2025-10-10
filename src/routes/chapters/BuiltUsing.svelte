<script lang="ts">
	import Divider from "$lib/components/Divider.svelte";
	import Portal from "$lib/components/Portal.svelte";
</script>

<Divider title="Built using Semantic Props" id="builtusing" open={false}>
	<div class="grid">
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
	</div>
</Divider>

<style>
	.grid {
		display: flex;
		flex-flow: row nowrap;
		gap: var(--large);
		scroll-snap-type: inline mandatory;
		overflow-x: auto;
		overflow-y: hidden;
		:global(& > *) {
			scroll-snap-align: center;
			inline-size: min(100%, var(--smaller-container));
			flex: 0 0 auto;
			transition: inline-size var(--fast-time) var(--ease-in);
			@media (--laptop) {
				inline-size: min(100%, var(--small-container));
			}
		}
	}
</style>