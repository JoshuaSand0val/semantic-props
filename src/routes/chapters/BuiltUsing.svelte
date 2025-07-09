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
		--grid-size: var(--smallest-container);
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(var(--grid-size), 100%), 1fr));
		gap: var(--large);
		@media (--tablet) {
			--grid-size: var(--smaller-container);
		}
		@media (--laptop) {
			--grid-size: var(--small-container);
		}
	}
</style>